import { combineReducers } from "@reduxjs/toolkit";
import majorCategories from "./tradeshowMajorCategoriesSlice";
import majorCategory_lineCodes from "./tradeshowMajorCategoryLineCodesSlice";
import tradeshowItems from "./tradeshowItemsSlice";

const reducer = combineReducers({
  majorCategories,
  majorCategory_lineCodes,
  tradeshowItems,
});

export default reducer;
