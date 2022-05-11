import { combineReducers } from "@reduxjs/toolkit";
import premiumItems from "./premiumItemsSlice";

const reducer = combineReducers({
  premiumItems,
});

export default reducer;
