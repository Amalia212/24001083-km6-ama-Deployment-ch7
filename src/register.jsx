import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "./GoogleLogin";
import {
  AtSymbolIcon,
  KeyIcon,
  IdentificationIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("localStorage ", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      alert("Tidak perlu register lagi, karena akun kamu masih aktif kok");
      navigate("/login");
    }
  }, []);

  const checkPasswordStrength = (password) => {
    // Regex untuk memeriksa kekuatan kata sandi
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!strongRegex.test(password)) {
      alert("Kata sandi harus lebih kuat.");
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    // Memeriksa apakah ada inputan yang kosong
    if (!name || !email || !password) {
      alert("Mohon lengkapi semua inputan untuk melakukan registrasi.");
      return;
    }

    // Memeriksa kekuatan kata sandi
    if (!checkPasswordStrength(password)) {
      return;
    }

    try {
      const responseRegister = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
        {
          email: email,
          name: name,
          password: password,
        }
      );
      console.log("json register ", responseRegister.data);
      if (responseRegister.status === 201) {
        alert("Register Berhasil");
        localStorage.setItem("token", response.data.data.token);
        navigate("/login", {
          state: { token: responseRegister.data.token },
        });
        return;
      } else {
        alert(responseRegister.data.message);
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      if (error.response) {
        console.error("Server response data: ", error.response.data);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-800 to-amber-500 flex flex-col h-screen items-center justify-center">
      <div className="border-2 p-12 rounded-lg shadow-lg bg-white flex flex-col items-center relative">
        <HomeIcon
          width={30}
          height={30}
          className="absolute top-3 left-3 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={() => navigate("/")}
        />
        <div className="mr-3 text-xl font-bold">Register</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
            <IdentificationIcon width={20} height={20} className="mr-3" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
            <AtSymbolIcon widths={20} height={20} className="mr-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
            <KeyIcon width={20} height={20} className="mr-3" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="text-sm text-red-600 mt-1">
            {/* Pesan error untuk kekuatan kata sandi */}
            Kata sandi harus lebih kuat.
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={registerUser}
        >
          Sign Up
        </button>
        <GoogleLogin buttonText="Google Login" />
      </div>
    </div>
  );
}

//----BATAS------

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "./redux/actions/authActions";
// // import { registerUser } from "./RegisterActions";
// import {
//   IdentificationIcon,
//   AtSymbolIcon,
//   KeyIcon,
// } from "@heroicons/react/24/solid";

// export default function Register() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.register.token);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   if (token) {
//     alert("Tidak perlu register lagi, karena akun kamu masih aktif kok");
//     navigate("/login");
//   }

//   const checkPasswordStrength = (password) => {
//     // Regex untuk memeriksa kekuatan kata sandi
//     const strongRegex = new RegExp(
//       "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
//     );
//     if (!strongRegex.test(password)) {
//       alert("Kata sandi harus lebih kuat.");
//       return false;
//     }
//     return true;
//   };

//   const registerHandler = async () => {
//     // Memeriksa apakah ada inputan yang kosong
//     if (!name || !email || !password) {
//       alert("Mohon lengkapi semua inputan untuk melakukan registrasi.");
//       return;
//     }

//     // Memeriksa kekuatan kata sandi
//     if (!checkPasswordStrength(password)) {
//       return;
//     }

//     await dispatch(registerUser(name, email, password));
//   };

//   return (
//     <div className="bg-gradient-to-r from-amber-800 to-amber-500 flex flex-col h-screen items-center justify-center">
//       <div className="border-2 p-12 rounded-lg shadow-lg bg-white flex flex-col items-center">
//         <div className="mr-3 text-xl font-bold">Register</div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="name"
//           >
//             Name
//           </label>
//           <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
//             <IdentificationIcon width={20} height={20} className="mr-3" />
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
//             <AtSymbolIcon width={20} height={20} className="mr-3" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
//             <KeyIcon width={20} height={20} className="mr-3" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <div className="text-sm text-red-600 mt-1">
//             {/* Pesan error untuk kekuatan kata sandi */}
//             Kata sandi harus lebih kuat.
//           </div>
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={registerHandler}
//         >
//           Sign Up
//         </button>
//         <GoogleLogin buttonText="Google Login" />
//       </div>
//     </div>
//   );
// }
