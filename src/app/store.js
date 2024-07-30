import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import purchasesReducer from "../features/purchaseSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    purchases: purchasesReducer,
  },
});
