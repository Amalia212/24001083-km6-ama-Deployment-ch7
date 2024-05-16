import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers/todoReducers";
import counterReducers from "./reducers/counterReducers";
import postsReducers from "./reducers/postsReducers";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import movieReducers from "./reducers/movieReducers";
// import movieDetailReducers from "./reducers/movieDetailReducers";
import popularReducers from "./reducers/popularReducers";
import ratedReducers from "./reducers/ratedReducers";
import trendingReducers from "./reducers/trendingReducers";
import homeReducers from "./reducers/homeReducers";
import detailPopularReducers from "./reducers/detailPopularReducers";
// import searchReducers from "./reducers/searchReducers";
// import authReducers from "./reducers/authReducers";

const rootReducers = combineReducers({
  counter: counterReducers,
  todo: todoReducers,
  posts: postsReducers,
  movies: movieReducers,
  // moviesDetail: movieDetailReducers,
  popular: popularReducers,
  topRated: ratedReducers,
  trending: trendingReducers,
  home: homeReducers,
  // auth: authReducers,
  detailData: detailPopularReducers,
  // search: searchReducers,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export const persistor = persistStore(store);
