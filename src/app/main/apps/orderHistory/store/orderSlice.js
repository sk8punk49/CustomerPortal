import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk(
  "orderHistory/orders/getOrders",
  async () => {
    const response = await axios.get("/api/orderHistory/orders");
    const data = await response.data;
    return data;
  }
);

const orderAdapter = createEntityAdapter({});

export const { selectAll: selectOrders } = orderAdapter.getSelectors(
  (state) => state.OrderHistory.orders
);

const orderSlice = createSlice({
  name: "orderHistory/orders",
  initialState: orderAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getOrders.fulfilled]: orderAdapter.setAll,
  },
});

export default orderSlice.reducer;
