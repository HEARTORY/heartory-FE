import { injectReducer } from "@/store";
import generateActions from "./generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
  user: {
    email: "",
  },
};

export const name = "user";

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...generateActions(initialState),
    setToken: (state: any, action: any) => {
      state.token = action.payload as string;
    },
    setUser: (state: any, action: any) => {
      const { email } = action.payload;
      state.user.email = email;
    },
    setEmail: (state: any, action: any) => {
      state.user.email = action.payload as string;
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
