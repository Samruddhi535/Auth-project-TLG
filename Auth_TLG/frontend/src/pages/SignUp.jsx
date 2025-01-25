// // // import React,{useState,useEffect} from 'react'
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import toast, { Toaster } from 'react-hot-toast';
// // // function SignUp() {

// // //   const [users,setUsers]=useState([]);
// // //   const [email,setEmail]=useState('');
// // //   const [username,setUsername]=useState('');
// // //   const [password,setPassword]=useState('');

// // //   const navigate=useNavigate();

// // //   useEffect(()=>{
// // //     fetchUsers();
// // //   },[])
// // //   const fetchUsers=()=>{
// // //     axios.get('http://localhost:3001/register')
// // //     .then((res)=>{
// // //       // console.log(res.data);
// // //     })
// // //   }

// // //   const handleRegister=(event)=>{
// // //     event.preventDefault();
// // //     axios.post('http://localhost:3001/register',{email,username,password})
// // //     .then(()=>{
// // //       setEmail('');
// // //       setPassword('');
// // //       setUsername('');
// // //       fetchUsers();
// // //       alert("Registration successful!");
// // //       toast.success("Registration successful!");
// // //       navigate('/login');

// // //     })
// // //     .catch((err)=>{
// // //       console.log("Unable to Register ",err)
// // //     })

// // //   }

// // //   return (
// // //     <>
// // //       <Toaster/>
// // //       <div className='w-full h-screen flex'>
// // //         <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
// // //           <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onSubmit={handleRegister}>
// // //             <label>Email</label>
// // //             <br/>
// // //             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
// // //             <br/>
// // //             <br/>
// // //             <label>Username</label>
// // //             <br/>
// // //             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="text" placeholder='Username' value={username} onChange={(event)=>setUsername(event.target.value)}/>
// // //             <br/>
// // //             <br/>
// // //             <label>Password</label>
// // //             <br/>
// // //             <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="password" placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
// // //             <br/>
// // //             <br/>
// // //             <button className='w-[200px] h-[50px] border hover:bg-teal-900' type='submit'>Sign Up</button>
// // //           </form>
// // //         </div>
// // //         <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
// // //           <h2 className='text-3xl text-white'>SIGNUP</h2>
// // //         </div>
// // //       </div>
// // //     </>
// // //   )
// // // }

// // // export default SignUp
// // import React, { useState } from "react";

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");

// //   const handleRegister = (event) => {
// //     event.preventDefault();

// //     // Log the form data as an object
// //     console.log({
// //       firstName,
// //       lastName,
// //       email,
// //       password,
// //       phoneNumber,
// //       role,
// //       firstSchool,
// //     });

// //     // Provide user feedback
// //     // alert("Form submitted! Check the console for the submitted details.");

// //     // Clear form fields
// //     setFirstName("");
// //     setLastName("");
// //     setEmail("");
// //     setPassword("");
// //     setPhoneNumber("");
// //     setRole("Select Role");
// //     setFirstSchool("");
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import toast, { Toaster } from "react-hot-toast";

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");

// //   const handleRegister = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:3001/register", {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         phoneNumber,
// //         role,
// //         firstSchool,
// //       });

// //       toast.success("Registration successful!");
// //       console.log(response.data);

// //       // Clear form fields
// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPassword("");
// //       setPhoneNumber("");
// //       setRole("Select Role");
// //       setFirstSchool("");
// //     } catch (error) {
// //       toast.error("Registration failed. Please try again.");
// //       console.error("Error during registration", error);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <Toaster />
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// // export default RegisterPage;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import toast, { Toaster } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom"; // Add navigation for redirection

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");

// //   const navigate = useNavigate(); // Initialize navigation hook

// //   const handleRegister = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:4000/signup", {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         phone: phoneNumber,
// //         role,
// //         yourFirstSchool: firstSchool,
// //       });

// //       toast.success("Registration successful! Please verify your email.");
// //       console.log(response.data);

// //       // Clear form fields
// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPassword("");
// //       setPhoneNumber("");
// //       setRole("Select Role");
// //       setFirstSchool("");

// //       // Wait for email verification
// //       const verificationResponse = await axios.post(
// //         "http://localhost:4000/verify-email",
// //         {
// //           email,
// //         }
// //       );

// //       if (verificationResponse.data.success) {
// //         toast.success("Email verified successfully! Redirecting to login.");
// //         // Redirect to login page after successful email verification
// //         navigate("/login");
// //       } else {
// //         toast.error("Email verification failed. Please try again.");
// //       }
// //     } catch (error) {
// //       toast.error("Registration or verification failed. Please try again.");
// //       console.error("Error during registration or email verification", error);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <Toaster />
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import toast, { Toaster } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom"; // Add navigation for redirection

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");

// //   const navigate = useNavigate(); // Initialize navigation hook

// //   // Function to extract token from the URL
// //   const getTokenFromUrl = () => {
// //     // const params = new URLSearchParams(window.location.search);
// //     // return params.get("token"); // Extract the token parameter
// //     const params = new URLSearchParams(window.location.search);
// //     const token = params.get("token");
// //     console.log("Extracted token:", token); // Log the token to check if it's extracted
// //     return token;
// //   };

// //   const handleRegister = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:4000/signup", {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         phone: phoneNumber,
// //         role,
// //         yourFirstSchool: firstSchool,
// //       });

// //       toast.success("Registration successful! Please verify your email.");
// //       console.log(response.data);

// //       // Clear form fields
// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPassword("");
// //       setPhoneNumber("");
// //       setRole("Select Role");
// //       setFirstSchool("");
// //     } catch (error) {
// //       toast.error("Registration failed. Please try again.");
// //       console.error("Error during registration", error);
// //     }
// //   };

// //   const handleEmailVerification = async () => {
// //     const token = getTokenFromUrl(); // Get the token from the URL
// //     if (!token) {
// //       toast.error("No verification token found in the URL.");
// //       return;
// //     }

// //     try {
// //       const verificationResponse = await axios.post(
// //         "http://localhost:4000/verify-email",
// //         {
// //           token, // Send the token in the request body
// //         }
// //       );

// //       console.log("Verification Response:", verificationResponse.data);

// //       if (verificationResponse.data.success) {
// //         toast.success("Email verified successfully! Redirecting to login.");
// //         // Redirect to login page after successful email verification
// //         navigate("/login");
// //       } else {
// //         toast.error("Email verification failed. Please try again.");
// //       }
// //     } catch (error) {
// //       toast.error("Email verification failed. Please try again.");
// //       console.error("Error during email verification", error);
// //     }
// //   };

// //   // Use useEffect to automatically trigger email verification when token is present in the URL
// //   useEffect(() => {
// //     handleEmailVerification(); // Automatically verify email if the token is in the URL
// //   }, []);

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <Toaster />
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import toast, { Toaster } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom"; // Add navigation for redirection

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");
// //   const [isVerifying, setIsVerifying] = useState(true); // Track the verification process
// //   const [verificationMessage, setVerificationMessage] = useState("");

// //   const navigate = useNavigate(); // Initialize navigation hook

// //   // Function to extract token from the URL
// //   const getTokenFromUrl = () => {
// //     const params = new URLSearchParams(window.location.search);
// //     const token = params.get("token");
// //     console.log("Extracted token:", token); // Log the token to check if it's extracted
// //     return token;
// //   };

// //   const handleRegister = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:4000/signup", {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         phone: phoneNumber,
// //         role,
// //         yourFirstSchool: firstSchool,
// //       });

// //       toast.success("Registration successful! Please verify your email.");
// //       console.log(response.data);

// //       // Clear form fields
// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPassword("");
// //       setPhoneNumber("");
// //       setRole("Select Role");
// //       setFirstSchool("");
// //     } catch (error) {
// //       toast.error("Registration failed. Please try again.");
// //       console.error("Error during registration", error);
// //     }
// //   };

// //   const handleEmailVerification = async () => {
// //     const token = getTokenFromUrl(); // Get the token from the URL
// //     if (!token) {
// //       toast.error("No verification token found in the URL.");
// //       setVerificationMessage("No verification token found.");
// //       setIsVerifying(false);
// //       return;
// //     }

// //     try {
// //       setVerificationMessage("Verifying your email...");

// //       const verificationResponse = await axios.get(
// //         `http://localhost:4000/verify-email?token=${token}`
// //       );

// //       console.log("Verification Response:", verificationResponse.data);

// //       if (verificationResponse.data.success) {
// //         toast.success("Email verified successfully! Redirecting to login.");
// //         setVerificationMessage(
// //           "Email verified successfully! Redirecting to login."
// //         );
// //         // Redirect to login page after successful email verification
// //         setTimeout(() => {
// //           navigate("/login");
// //         }, 3000); // Wait for 3 seconds before redirecting
// //       } else {
// //         toast.error("Email verification failed. Please try again.");
// //         setVerificationMessage("Email verification failed. Please try again.");
// //       }
// //     } catch (error) {
// //       toast.error("Email verification failed. Please try again.");
// //       setVerificationMessage("An error occurred during verification.");
// //       console.error("Error during email verification", error);
// //     } finally {
// //       setIsVerifying(false);
// //     }
// //   };

// //   // Use useEffect to automatically trigger email verification when token is present in the URL
// //   useEffect(() => {
// //     handleEmailVerification(); // Automatically verify email if the token is in the URL
// //   }, []);

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <Toaster />
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>

// //         {/* Verification message for email verification status */}
// //         <div className="mt-6 text-white">
// //           {isVerifying ? (
// //             <p>Verifying your email...</p>
// //           ) : (
// //             <p>{verificationMessage}</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// // import React, { useState, useEffect, useCallback } from "react";
// // import axios from "axios";
// // import toast, { Toaster } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom";
// // // import { useLocation } from "react-router-dom";

// // const RegisterPage = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [role, setRole] = useState("Select Role");
// //   const [firstSchool, setFirstSchool] = useState("");
// //   const [isVerifying, setIsVerifying] = useState(true);
// //   const [verificationMessage, setVerificationMessage] = useState("");

// //   const navigate = useNavigate();

// //   // Function to extract token from the URL
// //   const getTokenFromUrl = () => {
// //     console.log("window.location.search:", window.location.search);
// //     const params = new URLSearchParams(window.location.search);
// //     const token = params.get("token");
// //     // const location = useLocation();
// //     // const token = new URLSearchParams(location.search).get("token");
// //     console.log("Extracted token:", token);
// //     return token;
// //   };

// //   // Email verification function
// //   const handleEmailVerification = useCallback(async () => {
// //     const token = getTokenFromUrl();
// //     if (!token) {
// //       toast.error("No verification token found in the URL.");
// //       setVerificationMessage("No verification token found.");
// //       setIsVerifying(false);
// //       return;
// //     }

// //     try {
// //       setVerificationMessage("Verifying your email...");
// //       console.log("Sending verification request...");
// //       // API call to verify the email
// //       const verificationResponse = await axios.get(
// //         `http://localhost:4000/verify-email?token=${token}`
// //       );

// //       console.log("Verification Response:", verificationResponse.data);

// //       if (verificationResponse.data.success) {
// //         toast.success("Email verified successfully! Redirecting to login.");
// //         setVerificationMessage(
// //           "Email verified successfully! Redirecting to login."
// //         );
// //         setTimeout(() => {
// //           navigate("/login");
// //         }, 3000); // Redirect after 3 seconds
// //       } else {
// //         toast.error("Email verification failed. Please try again.");
// //         setVerificationMessage("Email verification failed. Please try again.");
// //       }
// //     } catch (error) {
// //       toast.error("Email verification failed. Please try again.");
// //       setVerificationMessage("An error occurred during verification.");
// //       console.error("Error during email verification", error);
// //     } finally {
// //       setIsVerifying(false);
// //     }
// //   }, [navigate]);

// //   // Automatically trigger email verification when token is present in the URL
// //   useEffect(() => {
// //     handleEmailVerification();
// //   }, [handleEmailVerification]);

// //   const handleRegister = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:4000/signup", {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //         phone: phoneNumber,
// //         role,
// //         yourFirstSchool: firstSchool,
// //       });

// //       toast.success("Registration successful! Please verify your email.");
// //       console.log(response.data);

// //       // Clear form fields
// //       setFirstName("");
// //       setLastName("");
// //       setEmail("");
// //       setPassword("");
// //       setPhoneNumber("");
// //       setRole("Select Role");
// //       setFirstSchool("");
// //     } catch (error) {
// //       toast.error("Registration failed. Please try again.");
// //       console.error("Error during registration", error);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-[90vh]">
// //       <Toaster />
// //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
// //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// //         <form onSubmit={handleRegister}>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phoneNumber}
// //               onChange={(e) => setPhoneNumber(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <div className="relative mb-4">
// //             <select
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //               className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             >
// //               <option value="Select Role" disabled>
// //                 Select Role
// //               </option>
// //               <option value="Admin">Admin</option>
// //               <option value="Contentcreator">Content Creator</option>
// //               <option value="User">User</option>
// //             </select>
// //           </div>
// //           <div className="relative mb-6">
// //             <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
// //             <input
// //               type="text"
// //               placeholder="Your First School"
// //               value={firstSchool}
// //               onChange={(e) => setFirstSchool(e.target.value)}
// //               className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
// //           >
// //             REGISTER
// //           </button>
// //         </form>

// //         {/* Verification message for email verification status */}
// //         <div className="mt-6 text-white">
// //           {isVerifying ? (
// //             <p>Verifying your email...</p>
// //           ) : (
// //             <p>{verificationMessage}</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";

// const RegisterPage = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [role, setRole] = useState("Select Role");
//   const [firstSchool, setFirstSchool] = useState("");

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/signup", {
//         firstName,
//         lastName,
//         email,
//         password,
//         phone: phoneNumber,
//         role,
//         yourFirstSchool: firstSchool,
//       });

//       toast.success("Registration successful! Please verify your email.");
//       console.log(response.data);

//       // Clear form fields
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPassword("");
//       setPhoneNumber("");
//       setRole("Select Role");
//       setFirstSchool("");
//     } catch (error) {
//       toast.error("Registration failed. Please try again.");
//       console.error("Error during registration", error);
//     }
//   };

//   return (
//     // <div className="flex items-center justify-center h-[90vh]">
//     //   <Toaster />
//     //   <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
//     //     <h2 className="text-2xl font-bold mb-6">Register</h2>
//     //     <form onSubmit={handleRegister}>
//     //       <div className="relative mb-4">
//     //         <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="text"
//     //           placeholder="First Name"
//     //           value={firstName}
//     //           onChange={(e) => setFirstName(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="relative mb-4">
//     //         <i className="fa fa-user absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="text"
//     //           placeholder="Last Name"
//     //           value={lastName}
//     //           onChange={(e) => setLastName(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="relative mb-4">
//     //         <i className="fa fa-envelope absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="email"
//     //           placeholder="Email"
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="relative mb-4">
//     //         <i className="fa fa-lock absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="password"
//     //           placeholder="Password"
//     //           value={password}
//     //           onChange={(e) => setPassword(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="relative mb-4">
//     //         <i className="fa fa-phone absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="text"
//     //           placeholder="Phone Number"
//     //           value={phoneNumber}
//     //           onChange={(e) => setPhoneNumber(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="relative mb-4">
//     //         <select
//     //           value={role}
//     //           onChange={(e) => setRole(e.target.value)}
//     //           className="w-full p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         >
//     //           <option value="Select Role" disabled>
//     //             Select Role
//     //           </option>
//     //           <option value="Admin">Admin</option>
//     //           <option value="Contentcreator">Content Creator</option>
//     //           <option value="User">User</option>
//     //         </select>
//     //       </div>
//     //       <div className="relative mb-6">
//     //         <i className="fa fa-school absolute left-3 top-3 text-gray-400"></i>
//     //         <input
//     //           type="text"
//     //           placeholder="Your First School"
//     //           value={firstSchool}
//     //           onChange={(e) => setFirstSchool(e.target.value)}
//     //           className="w-full pl-10 p-3 bg-gray-700 rounded-full text-white outline-none focus:ring-2 focus:ring-teal-500"
//     //           required
//     //         />
//     //       </div>
//     //       <button
//     //         type="submit"
//     //         className="w-full bg-gradient-to-r from-teal-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-yellow-400 hover:to-teal-400 transition"
//     //       >
//     //         REGISTER
//     //       </button>
//     //     </form>
//     //   </div>
//     // </div>

//     // <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
//     //   <Toaster />
//     //   <form
//     //     onSubmit={handleRegister}
//     //     className="relative w-full max-w-[400px] h-auto bg-black rounded-[50px_5px] flex flex-col items-center justify-center mt-10 p-8 shadow-lg"
//     //   >
//     //     <div className="absolute inset-0 w-full h-full overflow-hidden">
//     //       <div className="absolute w-[300%] h-[300%] -top-1/2 -left-1/2 bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
//     //       <div className="absolute w-[300%] h-[300%] -top-1/2 -left-1/2 bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div>
//     //     </div>

//     //     <div className="relative bg-black rounded-[50px_5px] w-full z-10">
//     //       <h2 className="text-2xl font-semibold text-center text-white">
//     //         Register
//     //       </h2>

//     //       <div className="mt-6">
//     //         <input
//     //           type="text"
//     //           placeholder="First Name"
//     //           value={firstName}
//     //           onChange={(e) => setFirstName(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="mt-6">
//     //         <input
//     //           type="text"
//     //           placeholder="Last Name"
//     //           value={lastName}
//     //           onChange={(e) => setLastName(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="mt-6">
//     //         <input
//     //           type="email"
//     //           placeholder="Email"
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="mt-6">
//     //         <input
//     //           type="password"
//     //           placeholder="Password"
//     //           value={password}
//     //           onChange={(e) => setPassword(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="mt-6">
//     //         <input
//     //           type="text"
//     //           placeholder="Phone Number"
//     //           value={phoneNumber}
//     //           onChange={(e) => setPhoneNumber(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="mt-6">
//     //         <select
//     //           value={role}
//     //           onChange={(e) => setRole(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         >
//     //           <option value="Select Role" disabled>
//     //             Select Role
//     //           </option>
//     //           <option value="Admin">Admin</option>
//     //           <option value="Contentcreator">Content Creator</option>
//     //           <option value="User">User</option>
//     //         </select>
//     //       </div>

//     //       <div className="mt-6">
//     //         <input
//     //           type="text"
//     //           placeholder="Your First School"
//     //           value={firstSchool}
//     //           onChange={(e) => setFirstSchool(e.target.value)}
//     //           className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//     //           required
//     //         />
//     //       </div>

//     //       <div className="relative mt-10 w-full">
//     //         <button
//     //           type="submit"
//     //           className="w-full h-12 text-white bg-black border border-[#c8a217] rounded-full hover:bg-[#c8a217] transition"
//     //         >
//     //           REGISTER
//     //         </button>
//     //       </div>

//     //       <div className="mt-6 text-center">
//     //         <Link to="/login" className="text-[#3cbdb1] text-base">
//     //           Already have an account?
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </form>
//     // </div>

//     <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
//       <Toaster />
//       <form
//         onSubmit={handleRegister}
//         className="relative w-full max-w-[400px] h-auto bg-black rounded-[50px_5px] flex flex-col items-center justify-center mt-10 p-8 shadow-lg"
//       >
//         <div className="absolute inset-0 w-full h-full overflow-hidden">
//           <div className="absolute w-[170%] h-[170%] -top-[10%] -left-[10%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
//           <div className="absolute w-[170%] h-[170%] -top-[10%] -left-[10%] bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div>
//         </div>

//         <div className="relative bg-black rounded-[50px_5px] w-full z-10">
//           <h2 className="text-2xl font-semibold text-center text-white">
//             Register
//           </h2>

//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="mt-6">
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             >
//               <option value="Select Role" disabled>
//                 Select Role
//               </option>
//               <option value="Admin">Admin</option>
//               <option value="Contentcreator">Content Creator</option>
//               <option value="User">User</option>
//             </select>
//           </div>

//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Your First School"
//               value={firstSchool}
//               onChange={(e) => setFirstSchool(e.target.value)}
//               className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
//               required
//             />
//           </div>

//           <div className="relative mt-10 w-full">
//             <button
//               type="submit"
//               className="w-full h-12 text-white bg-black border border-[#c8a217] rounded-full hover:bg-[#c8a217] transition"
//             >
//               REGISTER
//             </button>
//           </div>

//           <div className="mt-6 text-center">
//             <Link to="/login" className="text-[#3cbdb1] text-base">
//               Already have an account?
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("Select Role");
  const [firstSchool, setFirstSchool] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        firstName,
        lastName,
        email,
        password,
        phone: phoneNumber,
        role,
        yourFirstSchool: firstSchool,
      });

      toast.success("Registration successful! Please verify your email.");
      console.log(response.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setRole("Select Role");
      setFirstSchool("");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Error during registration", error);
    }
  };

  return (
    

    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <Toaster />
      
      <form
        onSubmit={handleRegister}
        className="relative w-full max-w-[400px] h-auto bg-black rounded-[50px] flex flex-col items-center justify-center mt-10 p-1 shadow-lg border-[5px]  border-transparent z-10" 
      >
       <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
      <div className="absolute w-[130%] h-[130%]  bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div>
      
       </div> 

        <div className="relative bg-black rounded w-full z-10">
          <h2 className="text-2xl font-semibold text-center text-white">
            Register
          </h2>

          <div className="mt-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          
          <div className="mt-6">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-12 bg-black text-white  border-b border-white text-lg outline-none px-2 cursor-pointer hover:text-yellow-500"
              required
            >
              <option value="Select Role" className="bg-black text-white">
                Select Role
              </option>
              <option value="Admin" className="bg-black text-white hover:bg-yellow-600">
                Admin
              </option>
              <option
                value="Contentcreator"
                className="bg-black text-white hover:bg-yellow-600"
              >
                Content Creator
              </option>
              <option value="User" className="bg-black text-white hover:bg-yellow-600">
                User
              </option>
            </select>
          </div>


          <div className="mt-6">
            <input
              type="text"
              placeholder="Your First School"
              value={firstSchool}
              onChange={(e) => setFirstSchool(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="relative mt-10 w-full">
            <button
              type="submit"
              className="w-full h-12 text-white bg-black border border-[#c8a217] rounded-full hover:bg-[#c8a217] transition"
            >
              REGISTER
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-[#3cbdb1] text-base">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;