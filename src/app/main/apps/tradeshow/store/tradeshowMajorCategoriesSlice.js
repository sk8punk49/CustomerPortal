import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getTradeshowMajorCategories = createAsyncThunk(
  "tradeshow/majorCategories/getTradeshowMajorCategories",
  async () => {
    const response = await axios.get("/api/tradeshow/majorCategories");
    const data = await response.data;
    return data;
  }
);

const tradeshowMajorCategoriesAdapter = createEntityAdapter({});

export const { selectAll: selectTradeshowMajorCategories } =
  tradeshowMajorCategoriesAdapter.getSelectors(
    (state) => state.Tradeshow.majorCategories
  );

const tradeshowMajorCategoriesSlice = createSlice({
  name: "tradeshow/majorCategories",
  initialState: tradeshowMajorCategoriesAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {},
  extraReducers: {
    [getTradeshowMajorCategories.fulfilled]:
      tradeshowMajorCategoriesAdapter.setAll,
  },
});

export default tradeshowMajorCategoriesSlice.reducer;
