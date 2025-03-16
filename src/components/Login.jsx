import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple authentication check
    if (email === "ahmadhassan@gmail.com" && password === "123") {
      setError(""); // Clear error if login is successful
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid Email or Password!"); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#1864ab] text-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h2 className="text-3xl font-extrabold mb-4">Welcome Back</h2>

        {error && (
          <div className="bg-red-500 text-white py-2 px-4 mb-4 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border-none text-black shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white placeholder-gray-500 transition-all ease-in-out duration-300 hover:shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
              📧
            </div>
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-lg border-none text-black shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white placeholder-gray-500 transition-all ease-in-out duration-300 hover:shadow-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
              🔒
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#1864ab] font-bold py-4 rounded-lg hover:bg-gray-200 transition shadow-md"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm">
          Don't have an account? <a href="#" className="underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;






// import React from "react";
// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-[#1864ab] text-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
//         <h2 className="text-3xl font-extrabold mb-8">Welcome Back</h2>
//         <form>
//           <div className="mb-6 relative">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-4 rounded-lg border-none text-black shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white placeholder-gray-500 transition-all ease-in-out duration-300 hover:shadow-md"
//               required
//             />
//             <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
//               📧
//             </div>
//           </div>
//           <div className="mb-6 relative">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-4 rounded-lg border-none text-black shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white placeholder-gray-500 transition-all ease-in-out duration-300 hover:shadow-md"
//               required
//             />
//             <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">
//               🔒
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-white text-[#1864ab] font-bold py-4 rounded-lg hover:bg-gray-200 transition shadow-md"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-6 text-sm">
//           Don't have an account? <a href="#" className="underline">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Login;