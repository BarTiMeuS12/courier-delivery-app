import { createAction } from "@reduxjs/toolkit";

export const TAKE_ORDER = "orders/TAKE_ORDER";
export const HAND_OFF_ORDER = "orders/HAND_OFF_ORDER";
export const REMOVE_ORDER = "orders/REMOVE_ORDER";

export const takeOrder = createAction(TAKE_ORDER);
export const handOffOrder = createAction(HAND_OFF_ORDER);

export const removeOrder = createAction(REMOVE_ORDER);