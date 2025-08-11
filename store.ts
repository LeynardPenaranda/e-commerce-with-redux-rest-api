import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Export RootState type (the type of the entire state)
export type RootState = ReturnType<typeof store.getState>;

// Export AppDispatch type (type of dispatch function)
export type AppDispatch = typeof store.dispatch;

export default store;
