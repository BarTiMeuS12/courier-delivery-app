import { createSlice } from '@reduxjs/toolkit';
import { setEmployees } from '../action/employeeAction.js';

const employeeSlice = createSlice({
  name: 'employee',

  initialState: {
    employees: []
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(setEmployees, (state, action) => {
      state.employees = action.payload;
    });
  }
});

export default employeeSlice.reducer;
