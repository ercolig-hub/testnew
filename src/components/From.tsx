// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailFROM, removemailFROM } from "../store/FromSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Grid, Typography } from "@material-ui/core";

type Props = {};
export const From = (props: Props) => {
  const usersFrom = useSelector(
    (state: RootState) => state.usersFROM.usersFROM
  );
  const dispatch = useDispatch();

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            From
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="From"
            tags={usersFrom}
            onAddition={(onAddition) => dispatch(addemailFROM(onAddition))}
            onDelete={(onDelete) => dispatch(removemailFROM(onDelete))}
            suggestions={suggestions}
            allowNew
          />
        </Box>
      </Box>
    </Grid>
  );
};
