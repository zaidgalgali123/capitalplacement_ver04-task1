import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsData: [],
};

export const questionsData = createSlice({
  name: "questionsData",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.questionsData.push(action.payload);
    },
    editForm: (state, action) => {
      let rest = state.questionsData.filter(
        (item) => item.id !== action.payload.id
      );
      state.questionsData = [...rest, action.payload];
    },
    deleteForm: (state, action) => {
      state.questionsData = state.questionsData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addForm, editForm, deleteForm } = questionsData.actions;
export default questionsData.reducer;
