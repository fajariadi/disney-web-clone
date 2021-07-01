import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import userSlice from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
