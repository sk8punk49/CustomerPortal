import {
    createEntityAdapter,
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getOrderDetails = createAsyncThunk(
    "orderHistory/orders/getOrderDetails",
    async () => {
        const response = await axios.get("/api/orderHistory/order_details");
        const data = await response.data;
        return data;
    }
);

const orderDetailsAdapter = createEntityAdapter({});

export const { selectAll: selectOrderDetails } = orderDetailsAdapter.getSelectors(
    (state) => state.OrderHistory.orderDetails
);

const orderDetailsSlice = createSlice({
    name: "orderHistory/order_details",
    initialState: orderDetailsAdapter.getInitialState(),
    reducers: {},
    extraReducers: {
        [getOrderDetails.fulfilled]: orderDetailsAdapter.setAll,
    },
});

export default orderDetailsSlice.reducer;
