// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailABCC, removemailABCC } from "../store/ABCCSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Grid, Typography } from "@material-ui/core";

type Props = {};
export const ABCC = (props: Props) => {
  const usersABCC = useSelector(
    (state: RootState) => state.usersABCC.usersABCC
  );
  const dispatch = useDispatch();

  const numero = 5;

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            ABCC
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="ABCC"
            tags={usersABCC}
            onAddition={(onAddition) => dispatch(addemailABCC(onAddition))}
            onDelete={(onDelete) => dispatch(removemailABCC(onDelete))}
            suggestions={suggestions}
            allowNew
          />
        </Box>
      </Box>
    </Grid>
  );
};
