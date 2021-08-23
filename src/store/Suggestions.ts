import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

const initialState = {
  loading: true,
  hasErrors: false,
  suggestions: [],
  usersTO: [
    { id: 0, name: "TOgiuseppe.ercoli@eidosmedia.it" },
    { id: 1, name: "TOdavide.tinini@eidosmedia.it" },
  ],
};

export const suggestionsSlice = createSlice({
  name: "recipe",
  initialState,

  reducers: {
    getRecipes: (state) => {
      state.loading = true;
    },
    getRecipesSuccess: (state, { payload }) => {
      state.suggestions = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getRecipesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
} = suggestionsSlice.actions;

export default suggestionsSlice.reducer;

export function fetchRecipes() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(getRecipes());

    function removeDuplicates(array: any[]) {
      return array.filter(
        (a: any, b: any) => array.indexOf(a.value) === b.value
      );
    }
    try {
      const response = await axios.get(
        "https://mth-cms-meth01-tom-dv3:3901/dsm/?ds=teamroleusersemails&op=rquery&view=_Email&_"
      );

      var XMLParser = require("react-xml-parser");
      var xml = new XMLParser().parseFromString(response.data); // Assume xmlText contains the example XML

      const TagEmail = xml.getElementsByTagName("Email");
      const seen = new Set();
      const senzafiltri = TagEmail.filter((el: { value: unknown }) => {
        const duplicate = seen.has(el.value);
        seen.add(el.value);
        return !duplicate;
      });

      const senzafiltri2 = senzafiltri.map((obj: any) => {
        return { name: obj.value };
      });

      console.log("senzafiltri2", senzafiltri2);

      dispatch(getRecipesSuccess(senzafiltri2));
    } catch (error) {
      console.log("error", error);
      dispatch(getRecipesFailure());
    }
  };
}
