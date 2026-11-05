import { createSlice } from "@reduxjs/toolkit";
import { takeOrder, handOffOrder } from "../action/ordersActions";
import { initialOrders } from "../../data/orders";

const setCourier = (state, action) => {
    const { id, courier } = action.payload;
    const order = state.list.find((o) => o.id === id);

    if (order) {
        order.courier = courier;
    }
};

const ordersSlice = createSlice({
    name: "orders",

    initialState: {
        list: initialOrders
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(takeOrder, setCourier)
            .addCase(handOffOrder, setCourier);
    }
});

export default ordersSlice.reducer;