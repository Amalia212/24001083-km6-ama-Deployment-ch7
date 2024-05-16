// // import axios from "axios";
// // import { setToken, setIsLoggedIn, setUser } from "../reducers/authReducers";

// // export const loginUser = (data, navigate) => async (dispatch) => {
// //   try {
// //     const response = await axios.post(
// //       "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
// //       data
// //     );
// //     const { token } = response.data.data;

// //     dispatch(setToken(token));
// //     dispatch(setIsLoggedIn(true));
// //     return response;
// //     navigate("/");
// //   } catch (error) {
// //     console.error("Error:", error.message);
// //     if (axios.isAxiosError(error)) {
// //       console.error(error?.response?.data?.message);
// //       return error.response;
// //     }
// //     console.error(error.message);
// //   }
// // };

// // export const registerUser =
// //   (name, email, password, confirmasi) => async (dispatch) => {
// //     try {
// //       const response = await axios.post(
// //         "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
// //         {
// //           name,
// //           email,
// //           password,
// //           confirmasi,
// //         }
// //       );

// //       const { token } = response.data.data;

// //       dispatch(setToken(token));
// //       dispatch(setIsLoggedIn(true));
// //       navigate("/login");
// //     } catch (error) {
// //       console.error("Error:", error.message);
// //       if (axios.isAxiosError(error)) {
// //         console.error(error?.response?.data?.message);
// //         return error.response;
// //       }
// //       console.error(error.message);
// //     }
// //   };

// // export const googleLogin = (data, navigate) => async (dispatch) => {
// //   try {
// //     const response = await axios.post(
// //       "https://shy-cloud-3319.fly.dev/api/v1/auth/google",
// //       data
// //     );
// //     const { token } = response.data.data;

// //     dispatch(setToken(token));
// //     dispatch(setIsLoggedIn(true));

// //     navigate("/");
// //   } catch (error) {
// //     console.error("Error:", error.message);
// //     if (axios.isAxiosError(error)) {
// //       console.error(error?.response?.data?.message);
// //       return error.response;
// //     }
// //     console.error(error.message);
// //   }
// // };

// // export const logout = (navigate) => async (dispatch) => {
// //   dispatch(setToken(null));
// //   dispatch(setIsLoggedIn(false));
// //   dispatch(setUser(null));
// //   navigate("/login");
// // };

// // import axios from "axios";
// // import { setToken, setIsLoggedIn, setUser } from "../reducers/authReducers";
// // // import { setToken, setIsLoggedIn, setUser } from "../reducers/authSlice";

// // export const loginUser = (data, navigate) => async (dispatch) => {
// //   try {
// //     const response = await axios.post(
// //       `https://shy-cloud-3319.fly.dev/api/v1/auth/login`,
// //       data,
// //       { "Content-Type": "application/json" }
// //     );
// //     const { token } = response?.data?.data;

// //     dispatch(setToken(token));
// //     dispatch(setIsLoggedIn(true));
// //     navigate("/");
// //   } catch (error) {
// //     console.error(error.message);
// //   }
// // };

// // export const registerUser =
// //   (name, email, password, navigate) => async (dispatch) => {
// //     try {
// //       const response = await axios.post(
// //         `https://shy-cloud-3319.fly.dev/api/v1/auth/register`,
// //         { name, email, password },
// //         { "Content-Type": "application/json" }
// //       );
// //       const { token } = response?.data?.data;

// //       dispatch(setToken(token));
// //       dispatch(setIsLoggedIn(true));
// //       navigate("/login");
// //     } catch (error) {
// //       console.error(error.message);
// //     }
// //   };

// // export const googleLogin = (data, navigate) => async (dispatch) => {
// //   try {
// //     const response = await axios.post(
// //       `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
// //       data,
// //       { "Content-Type": "application/json" }
// //     );
// //     const { token } = response?.data?.data;

// //     dispatch(setToken(token));
// //     dispatch(setIsLoggedIn(true));
// //     navigate("/");
// //   } catch (error) {
// //     console.error(error.message);
// //   }
// // };

// // export const logout = (navigate) => async (dispatch) => {
// //   dispatch(setToken(null));
// //   dispatch(setIsLoggedIn(false));
// //   dispatch(setUser(null));
// //   navigate("/login");
// // };

// // authActions.js
// import axios from "axios";
// import { setToken, setIsLoggedIn } from "../reducers/authReducers";
// // import { setToken, setIsLoggedIn } from "./authSlice";

// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
//       {
//         email: email,
//         password: password,
//       }
//     );
//     const data = response.data;
//     console.log("data", data);
//     localStorage.setItem("token", response.data.data.token);
//     dispatch(setToken(response.data.data.token));
//     dispatch(setIsLoggedIn(true));
//   } catch (error) {
//     console.error("Error during login: ", error);
//     if (error.response && error.response.status === 401) {
//       alert("Email atau kata sandi yang dimasukkan salah");
//     } else {
//       alert("Terjadi kesalahan saat melakukan login. Mohon coba lagi.");
//     }
//   }
// };

// export const registerUser = (name, email, password) => async (dispatch) => {
//   try {
//     const responseRegister = await axios.post(
//       "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
//       {
//         email: email,
//         name: name,
//         password: password,
//       }
//     );
//     console.log("json register ", responseRegister.data);
//     if (responseRegister.status === 201) {
//       alert("Register Berhasil");
//       localStorage.setItem("token", responseRegister.data.token);
//       dispatch(setToken(responseRegister.data.token));
//       dispatch(setIsLoggedIn(true));
//     } else {
//       alert(responseRegister.data.message);
//     }
//   } catch (error) {
//     console.error("Error during registration: ", error);
//     if (error.response) {
//       console.error("Server response data: ", error.response.data);
//     }
//   }
// };
