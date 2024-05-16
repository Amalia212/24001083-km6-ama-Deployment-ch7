// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   token: localStorage.getItem("token") || null,
// //   isLoggedIn: !!localStorage.getItem("token"),
// //   user: null,
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setToken: (state, action) => {
// //       if (action.payload) {
// //         localStorage.setItem("token", action.payload);
// //       } else {
// //         localStorage.removeItem("token");
// //       }
// //       state.token = action.payload;
// //     },
// //     setIsLoggedIn: (state, action) => {
// //       state.isLoggedIn = action.payload;
// //     },
// //     setUser: (state, action) => {
// //       state.user = action.payload;
// //     },
// //   },
// // });

// // export const { setToken, setIsLoggedIn, setUser } = authSlice.actions;

// // export default authSlice.reducer;

// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   token: localStorage.getItem("token") || null,
// //   isLoggedIn: !!localStorage.getItem("token"),
// //   user: null,
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setToken: (state, action) => {
// //       if (action.payload) {
// //         localStorage.setItem("token", action.payload);
// //       } else {
// //         localStorage.removeItem("token");
// //       }
// //       state.token = action.payload;
// //     },
// //     setIsLoggedIn: (state, action) => {
// //       state.isLoggedIn = action.payload;
// //     },
// //     setUser: (state, action) => {
// //       state.user = action.payload;
// //     },
// //   },
// // });

// // export const { setIsLoggedIn, setToken, setUser } = authSlice.actions;
// // export default authSlice.reducer;

// // authReducer.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: localStorage.getItem("token") || null,
//   isLoggedIn: !!localStorage.getItem("token"),
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//   },
// });

// export const { setToken, setIsLoggedIn } = authSlice.actions;

// export default authSlice.reducer;
