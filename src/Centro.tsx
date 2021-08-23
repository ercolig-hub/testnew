// @flow
import { Grid } from "@material-ui/core";
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { form, suggestions, tags } from "./utils/conf";

import "./utils/style.css";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchRecipes,
  getRecipes,
  getRecipesFailure,
  getRecipesSuccess,
} from "./store/Suggestions";

import { RootState } from "./store";
import { From } from "./components/From";
import { To } from "./components/To";
import { CC } from "./components/CC";
import { CCContacts } from "./components/CCContacts";
import { useEffect } from "react";
import { BCC } from "./components/BCC";
import { ABCC } from "./components/ABCC";

import { responseMetadata } from "./utils/conf";
import { fetchMeta } from "./store/ResponseMetadata";
import { WorkingTitle } from "./components/WorkingTitle";
import { fetchMetaReport } from "./store/ReportMetadata";

type Props = {};

export const Centro = () => {
  const dispatch = useDispatch();
  const { loading, hasErrors, suggestions } = useSelector(
    (state: RootState) => state.recipe
  );

  useEffect(() => {
    //dispatch(fetchRecipes());
    dispatch(fetchMeta());
    dispatch(fetchMetaReport());
  }, [dispatch]);

  return (
    <>
      {/* {form.map((obj) => ( */}
      <Grid container justify="center" spacing={3} direction={"column"}>
        <To />
        <From />
        <CC />
        <CCContacts />
        <BCC />
        <ABCC />
        <WorkingTitle />
      </Grid>
    </>
  );
};
