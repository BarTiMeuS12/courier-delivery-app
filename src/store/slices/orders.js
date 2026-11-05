import { createSlice } from "@reduxjs/toolkit";
import { takeOrder, handOffOrder, removeOrder } from "../action/ordersActions";
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
            .addCase(handOffOrder, setCourier)
            .addCase(removeOrder, (state, action) => {
                state.list = state.list.filter((o) => o.id !== action.payload);
            });
    }
});

export default ordersSlice.reducer;