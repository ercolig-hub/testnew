// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailTO, initialStateTO, removemailTO } from "../store/TOSlice";

import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";

type Props = {};
export const To = (props: Props) => {
  const usersTO = useSelector((state: RootState) => state.usersTO.usersTO);
  const sugg = useSelector((state: RootState) => state.recipe.suggestions);
  const dispatch = useDispatch();

  const { loadingMeta, hasErrorsMeta, responseMeta } = useSelector(
    (state: RootState) => state.responseMeta
  );

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            To
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="To"
            tags={usersTO}
            onAddition={(onAddition) => dispatch(addemailTO(onAddition))}
            onDelete={(onDelete) => dispatch(removemailTO(onDelete))}
            suggestions={sugg}
            allowNew
          />
        </Box>
      </Box>
    </Grid>
  );
};
