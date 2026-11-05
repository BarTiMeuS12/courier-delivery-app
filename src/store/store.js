import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import employeeReducer from "./slices/employee";

const store = configureStore({
    reducer: {
        auth: authReducer,
        employee: employeeReducer
    },
    devTools: true
});

export default store;