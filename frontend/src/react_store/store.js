import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../react_store/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
