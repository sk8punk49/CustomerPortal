import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCustomerDiscounts = createAsyncThunk(
  "home/customerDiscounts/getCustomerDiscounts",
  async () => {
    const response = await axios.get("/api/home/customerDiscounts");
    const data = await response.data;

    return data;
  }
);

const customerDiscountAdapter = createEntityAdapter({});

export const { selectAll: selectCustomerDiscounts } =
  customerDiscountAdapter.getSelectors((state) => state.Home.customerDiscounts);

const customerDiscountsSlice = createSlice({
  name: "home/customerDiscounts",
  initialState: customerDiscountAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getCustomerDiscounts.fulfilled]: customerDiscountAdapter.setAll,
  },
});

export default customerDiscountsSlice.reducer;
