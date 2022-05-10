import { combineReducers } from "@reduxjs/toolkit";
import widgets from "./widgetsSlice";
import customerDiscounts from "./customerDiscountSlice";

const reducer = combineReducers({
  widgets,
  customerDiscounts,
});

export default reducer;
