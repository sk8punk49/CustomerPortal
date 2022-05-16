import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getTradeshowMajorCategoryLineCodes = createAsyncThunk(
  "tradeshow/majorCategories/getTradeshowMajorCategoryLineCodes",
  async () => {
    const response = await axios.get("/api/tradeshow/majorCategory_lineCodes");
    const data = await response.data;
    return data;
  }
);

const tradeshowMajorCategoryLineCodesAdapter = createEntityAdapter({});

export const { selectEntities: selectTradeshowMajorCategoryLineCodes } =
  tradeshowMajorCategoryLineCodesAdapter.getSelectors(
    (state) => state.Tradeshow.majorCategory_lineCodes
  );

const tradeshowMajorCategoryLineCodesSlice = createSlice({
  name: "tradeshow/majorCategory_lineCodes",
  initialState: tradeshowMajorCategoryLineCodesAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {},
  extraReducers: {
    [getTradeshowMajorCategoryLineCodes.fulfilled]:
      tradeshowMajorCategoryLineCodesAdapter.setAll,
  },
});

export default tradeshowMajorCategoryLineCodesSlice.reducer;
