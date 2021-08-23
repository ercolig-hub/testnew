import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { nanoid } from "nanoid";

const initialState = {
  usersABCC: [],
};

export const counterSlice = createSlice({
  name: "usersABCC",
  initialState,
  reducers: {
    initialStateABCC: (state: any, action) => {
      let initialState2;
      if (action.payload != null) {
        if (action.payload.indexOf(",") == -1) {
          initialState2 = [{ id: 0, name: action.payload }];
          state.usersABCC = initialState2;
        } else {
          var resSplit = action.payload.split(",");
          const newarr = resSplit.map((obj: any) => {
            return { id: 3, name: obj };
          });
          state.usersABCC = newarr;
        }
      }
    },
    addemailABCC: (state: any, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const { name } = action.payload;
      const UUID = require("uuid-int");
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();

      state.usersABCC.push({ id: uuid, name: name });
    },

    removemailABCC: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const tags = state.usersABCC.slice(0);
      tags.splice(action.payload, 1);
      console.log(action.payload);
      state.usersABCC = tags;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addemailABCC,
  removemailABCC,
  initialStateABCC,
} = counterSlice.actions;

export default counterSlice.reducer;
