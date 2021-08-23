import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  usersFROM: [],
};

export const counterSlice = createSlice({
  name: "usersFROM",
  initialState,
  reducers: {
    initialStateFROM: (state: any, action) => {
      const initialState2 = [{ id: 0, name: action.payload }];
      state.usersFROM = initialState2;
    },

    addemailFROM: (state: any, action) => {
      const { name } = action.payload;
      const UUID = require("uuid-int");
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid();

      state.usersFROM.push({ id: uuid, name: name });
    },

    removemailFROM: (state, action) => {
      const tags = state.usersFROM.slice(0);
      tags.splice(action.payload, 1);
      console.log(action.payload);
      state.usersFROM = tags;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addemailFROM,
  removemailFROM,
  initialStateFROM,
} = counterSlice.actions;

export default counterSlice.reducer;
