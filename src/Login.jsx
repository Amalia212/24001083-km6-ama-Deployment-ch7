import { useState } from "react";
import "./index.css"; // Import file CSS untuk styling
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { AtSymbolIcon, KeyIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  async function getData(email, password) {
    try {
      const response = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      );
      // const data = response.data;
      // console.log("data", data);
      // localStorage.setItem("token", response.data.data.token);
      console.log("Login Response", response);
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      navigate("/"); // Navigasi ke halaman home setelah login berhasil

      if (response.status === 200) {
        console.log("Login SUKSES");
        // const token = response.data.data.token;
        // localStorage.setItem("token", token);

        // Panggil endpoint /auth/me untuk mendapatkan detail pengguna setelah login berhasil
        const userDataResponse = await axios.get(
          "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = userDataResponse.data.data;

        // setUser(userData); // Anda perlu menentukan setUser untuk menggunakan kode ini
        alert(`Login sukses! Selamat datang, ${userData.name}!`);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Email atau kata sandi yang dimasukkan salah");
      } else {
        alert("Terjadi kesalahan saat melakukan login. Mohon coba lagi.");
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Silakan masukkan username dan password");
      return;
    }
    await getData(email, password);
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
        <div className="mr-3 text-xl font-bold">Login</div>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
            <AtSymbolIcon width={20} height={20} className="mr-3" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <GoogleLogin buttonText="Google Login" />
      </div>
    </div>
  );
}

//------ BATAS------

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "./redux/actions/authActions";
// // import { loginUser } from "./LoginActions";
// import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/solid";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.login.token);

//   if (token) {
//     alert("Tidak perlu login lagi, karena kamu sudah login.");
//     navigate("/");
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Silakan masukkan email dan password");
//       return;
//     }
//     await dispatch(loginUser(email, password));
//   };

//   return (
//     <div className="bg-gradient-to-r from-amber-800 to-amber-500 flex flex-col h-screen items-center justify-center">
//       <div className="border-2 p-12 rounded-lg shadow-lg bg-white flex flex-col items-center">
//         <div className="mr-3 text-xl font-bold">Login</div>
//         <form
//           className="auth-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit(e);
//           }}
//         >
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <div className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex items-center">
//             <AtSymbolIcon width={20} height={20} className="mr-3" />
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
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
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
//             type="submit"
//           >
//             Sign In
//           </button>
//         </form>
//         <GoogleLogin buttonText="Google Login" />
//       </div>
//     </div>
//   );
// }
