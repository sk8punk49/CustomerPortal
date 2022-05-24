import { combineReducers } from "@reduxjs/toolkit";
import orders from "./orderSlice";
import orderDetails from "./orderDetailsSlice";

const reducer = combineReducers({
  orderDetails,
  orders,
});

export default reducer;
