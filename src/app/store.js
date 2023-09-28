import { configureStore } from "@reduxjs/toolkit";
import questionsData from "./features/questionsSlice";
export const store = configureStore({
  reducer: {
    questionsData: questionsData,
  },
});
