import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import ordersReducer from "./slices/orders";

const rootReducer = combineReducers({
    auth: authReducer,
    orders: ordersReducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export default store;