import { combineReducers } from "@reduxjs/toolkit";
import majorCategories from "./tradeshowMajorCategoriesSlice";
import majorCategory_lineCodes from "./tradeshowMajorCategoryLineCodesSlice";

const reducer = combineReducers({
  majorCategories,
  majorCategory_lineCodes,
});

export default reducer;
