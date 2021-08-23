import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const initialState = {
  usersTO: [],
};

export const counterSlice = createSlice({
  name: "usersTO",
  initialState,
  reducers: {
    initialStateTO: (state: any, action) => {
      let initialState2;

      if (action.payload.indexOf(",") == -1) {
        initialState2 = [{ id: 0, name: action.payload }];
        state.usersTO = initialState2;
      } else {
        var resSplit = action.payload.split(",");

        var filtered = resSplit.filter(function (el: any) {
          return el != null && el != undefined && el.length > 0;
        });

        const newarr = filtered.map((obj: any) => {
          return { id: 3, name: obj };
        });
        console.log(newarr);
        state.usersTO = newarr;
      }
    },
    addemailTO: (state: any, action) => {
      const { name } = action.payload;
      const UUID = require("uuid-int");
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();

      state.usersTO.push({ id: uuid, name: name });
    },

    removemailTO: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const tags = state.usersTO.slice(0);
      tags.splice(action.payload, 1);
      console.log(action.payload);
      state.usersTO = tags;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addemailTO,
  removemailTO,
  initialStateTO,
} = counterSlice.actions;

export default counterSlice.reducer;
