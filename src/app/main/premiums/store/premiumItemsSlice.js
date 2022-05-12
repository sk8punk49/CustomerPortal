import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPremiumItems = createAsyncThunk(
  "premiums/premiumItems/getPremiumItems",
  async () => {
    const response = await axios.get("/api/premiums/premiumItems");
    const data = await response.data;
    return data;
  }
);

const premiumItemAdapter = createEntityAdapter({});

export const { selectAll: selectPremiumItems } =
  premiumItemAdapter.getSelectors((state) => state.Premiums.premiumItems);

const premiumItemsSlice = createSlice({
  name: "premiums/premiumItems",
  initialState: premiumItemAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getPremiumItems.fulfilled]: premiumItemAdapter.setAll,
  },
});

export default premiumItemsSlice.reducer;
