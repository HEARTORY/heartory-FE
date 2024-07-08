import { injectReducer } from "@/store";
import generateActions from "./generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dateStart: "2024-05-01",
  dateEnd: "2024-08-31",
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
