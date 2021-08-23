import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  usersFrom: [
    { id: 0, name: "ttt.ercoli@eidosmedia.it" },
    { id: 1, name: "vvv.tinini@eidosmedia.it" },
  ],
};

export const counterSlice = createSlice({
  name: "usersFrom",
  initialState,
  reducers: {
    addemailFrom: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.usersFrom.push(action.payload);
    },

    removemailFrom: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const tags = state.usersFrom.slice(0);
      tags.splice(action.payload, 1);
      console.log(action.payload);
      state.usersFrom = tags;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addemailFrom, removemailFrom } = counterSlice.actions;

export default counterSlice.reducer;
