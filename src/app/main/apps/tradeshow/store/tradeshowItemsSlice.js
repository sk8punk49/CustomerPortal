import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getTradeshowItems = createAsyncThunk(
  "tradeshow/tradeshowItems/getTradeshowItems",
  async () => {
    const response = await axios.get("/api/tradeshow/tradeshowItems");
    const data = await response.data;
    return data;
  }
);

const tradeshowItemsAdapter = createEntityAdapter({});

export const {
  selectAll: selectTradeshowItems,
  selectById: selectTradeshowItemById,
} = tradeshowItemsAdapter.getSelectors(
  (state) => state.Tradeshow.tradeshowItems
);

const tradeshowItemsSlice = createSlice({
  name: "tradeshow/tradeshowItems",
  initialState: tradeshowItemsAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {},
  extraReducers: {
    [getTradeshowItems.fulfilled]: tradeshowItemsAdapter.setAll,
  },
});

export default tradeshowItemsSlice.reducer;
