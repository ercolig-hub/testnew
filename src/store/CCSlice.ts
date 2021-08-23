import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  usersCC: [],
};

export const counterSlice = createSlice({
  name: "usersCC",
  initialState,
  reducers: {
    initialStateCC: (state: any, action) => {
      let initialState2;

      if (action.payload.indexOf(",") == -1) {
        initialState2 = [{ id: 0, name: action.payload }];
        state.usersCC = initialState2;
      } else {
        var resSplit = action.payload.split(",");

        var filtered = resSplit.filter(function (el: any) {
          return el != null && el != undefined && el.length > 0;
        });

        const newarr = filtered.map((obj: any) => {
          return { id: 3, name: obj };
        });
        console.log(newarr);
        state.usersCC = newarr;
      }
    },

    addemailCC: (state: any, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const prova = state.usersCC;
      let trovato = false;
      const test = prova.map((obj: any) => {
        if (obj.name === action.payload.name) {
          trovato = true;
        }
        return { id: obj.name, name: obj.name };
      });

      // console.log("test", test);
      console.log("ttt", action.payload);

      const { name } = action.payload;
      const UUID = require("uuid-int");
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();
      if (!trovato) {
        state.usersCC.push({ id: uuid, name: name });
      }
    },

    removemailCC: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const tags = state.usersCC.slice(0);
      tags.splice(action.payload, 1);
      console.log(action.payload);
      state.usersCC = tags;
    },

    updatemailCC: (state: any, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const tags = state.usersCC.filter(
        (obj: any) => obj.name !== action.payload.name
      );
      //tags.splice(action.payload, 1);
      //console.log(action.payload);
      state.usersCC = tags;
    },

    updatemailaddCC: (state: any, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const prova = state.usersCC;

      const test = prova.map((obj: any) => {
        return { id: obj.name, name: obj.name };
      });

      console.log("test", test);
      console.log("ttt", action.payload);

      const { name } = action.payload;
      const UUID = require("uuid-int");
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();

      state.usersCC.push({ id: uuid, name: name });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addemailCC,
  removemailCC,
  initialStateCC,
  updatemailCC,
  updatemailaddCC,
} = counterSlice.actions;

export default counterSlice.reducer;
