import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
  modalSignup: false,
  modalThanks: false,
};

const modelSlice = createSlice({
  name: "Model",
  initialState,
  reducers: {
    loginModal: (state, action) => {
      state.modalLogin = action.payload;
    },
    signuPModal: (state, action) => {
      state.modalSignup = action.payload;
    },
    thankModel: (state, action) => {
      state.modalThanks = action.payload;
    },
  },
});

export const { loginModal, signuPModal, thankModel } = modelSlice.actions;
export default modelSlice.reducer;
