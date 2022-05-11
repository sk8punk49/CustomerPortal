import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPremiumItems = createAsyncThunk(
  "premiums/getPremiumItems",
  async () => {
    const response = await axios.get("/api/premiums/premiumItems");
    const data = await response.data;
    console.log(data);
    return data;
  }
);

const premiumItemAdapter = createEntityAdapter({});

export const {
  selectAll: selectPremiumItems,
  selectEntities: selectPremiumItemsEntities,
  selectById: selectPremiumItemById,
} = premiumItemAdapter.getSelectors((state) => state.Home.widgets);

const premiumItemsSlice = createSlice({
  name: "premiums/premiumItems",
  initialState: premiumItemAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getPremiumItems.fulfilled]: premiumItemAdapter.setAll,
  },
});

export default premiumItemsSlice.reducer;
