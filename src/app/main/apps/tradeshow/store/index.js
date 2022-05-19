import { combineReducers } from "@reduxjs/toolkit";
import lineCode_mapping from "./tradeshowLineCodeMappingSlice";
import majorCategory_lineCodes from "./tradeshowMajorCategoryLineCodesSlice";
import tradeshowItems from "./tradeshowItemsSlice";

const reducer = combineReducers({
  lineCode_mapping,
  majorCategory_lineCodes,
  tradeshowItems,
});

export default reducer;
