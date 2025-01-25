import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiError, ApiResponse } from "../utils/api.js";
import { sendEmail } from "../utils/sendEmail.js";

/** Signup Controller */
export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password, phone, role, yourFirstSchool } =
    req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ApiError(400, "User already exists"));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with `isVerified` set to false
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      role,
      yourFirstSchool,
      isVerified: false,
    });

    // Generate email verification token
    const verificationToken = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Construct the verification link
    const verificationLink = `${process.env.BASE_URL}/verify-email?token=${encodeURIComponent(verificationToken)}`;

    const signupEmailBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            h1 { color: #333; font-size: 24px; text-align: center; }
            p { color: #555; font-size: 16px; line-height: 1.5; }
            .cta-button { display: block; width: 100%; max-width: 200px; margin: 20px auto; padding: 12px; background-color: #2d87f0; color: white; text-align: center; font-size: 16px; text-decoration: none; border-radius: 5px; }
            .cta-button:hover { background-color: #1e70c3; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Our Platform!</h1>
            <p>Hi ${firstName},</p>
            <p>Thank you for signing up. To complete your registration, please verify your email by clicking the link below:</p>
            <a href="${verificationLink}" class="cta-button">Verify Email</a>
            <p>If you didn't sign up, please ignore this email.</p>
            <p>Best regards,<br/>To-Let Globe</p>
          </div>
        </body>
      </html>
    `;

    // Send the verification email
    await sendEmail(email, "Verify Your Email", signupEmailBody);

    // Respond with a success message
    res.status(201).json(
      new ApiResponse(201, {
        message: "User created successfully. Please verify your email.",
      })
    );
  } catch (error) {
    next(new ApiError(500, "Error in signup controller", [error.message]));
  }
};

/** Forgot Password Controller */
export const forgotPassword = async (req, res, next) => {
  const { email, yourFirstSchool } = req.body;

  try {
    // Find the user by email and security question answer
    const user = await User.findOne({
      email,
      yourFirstSchool,
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Generate password reset token
    const resetToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Construct reset link
    const resetLink = `${process.env.BASE_URL}/reset-password?token=${resetToken}`;

    const passwordResetEmailBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            h1 { color: #333; font-size: 24px; text-align: center; }
            p { color: #555; font-size: 16px; line-height: 1.5; }
            .cta-button { display: block; width: 100%; max-width: 200px; margin: 20px auto; padding: 12px; background-color: #e04e5e; color: white; text-align: center; font-size: 16px; text-decoration: none; border-radius: 5px; }
            .cta-button:hover { background-color: #d0454f; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Password Reset Request</h1>
            <p>Hi ${user.firstName},</p>
            <p>We received a request to reset your password. If you made this request, click the button below to reset your password:</p>
            <a href="${resetLink}" class="cta-button">Reset Password</a>
            <p>If you didn't request a password reset, please ignore this email.</p>
            <p>Best regards,<br/>To-Let Globe</p>
          </div>
        </body>
      </html>
    `;

    // Send reset password email
    await sendEmail(email, "Password Reset", passwordResetEmailBody);

    res.status(200).json(
      new ApiResponse(200, {
        message: "Password reset email sent successfully",
      })
    );
  } catch (error) {
    next(
      new ApiError(500, "Error in forgot password controller", [error.message])
    );
  }
};
