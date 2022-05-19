import { combineReducers } from "@reduxjs/toolkit";
import orders from "./orderSlice";

const reducer = combineReducers({
  orders,
});

export default reducer;
