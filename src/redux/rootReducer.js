import { combineReducers } from "@reduxjs/toolkit";
import modelSlice from "./models/model.slicer";
const roodReducer = combineReducers({
  modelSlice,
});
export default roodReducer;
