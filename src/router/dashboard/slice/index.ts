import { injectReducer } from "@/store";
import generateActions from "./generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dateStart: "May 01, 2024",
  dateEnd: "August 31, 2024",
};

export const name = "dateRangeDashboard";

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...generateActions(initialState),
    setDateStart: (state: any, action: any) => {
      state.dateStart = action.payload as string;
    },
    setDateEnd: (state: any, action: any) => {
      state.dateEnd = action.payload as string;
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
