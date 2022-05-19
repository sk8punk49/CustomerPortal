import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getLineCodeMapping = createAsyncThunk(
  "tradeshow/majorCategories/getLineCodeMapping",
  async () => {
    const response = await axios.get("/api/tradeshow/lineCode_mapping");
    const data = await response.data;
    return data;
  }
);

const tradeshowLineCodeMappingAdapter = createEntityAdapter({});

export const { selectAll: selectLineCodeMapping } =
  tradeshowLineCodeMappingAdapter.getSelectors(
    (state) => state.Tradeshow.lineCode_mapping
  );

const tradeshowLineCodeMappingSlice = createSlice({
  name: "tradeshow/lineCode_mapping",
  initialState: tradeshowLineCodeMappingAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {},
  extraReducers: {
    [getLineCodeMapping.fulfilled]: tradeshowLineCodeMappingAdapter.setAll,
  },
});

export default tradeshowLineCodeMappingSlice.reducer;
