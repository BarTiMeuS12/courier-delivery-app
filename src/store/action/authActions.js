import { createAction } from "@reduxjs/toolkit";

export const SET_USER = "auth/SET_USER";
export const LOGOUT_USER = "auth/LOGOUT_USER";

export const setUser = createAction(SET_USER);
export const logoutUser = createAction(LOGOUT_USER);