// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailCC, removemailCC } from "../store/CCSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Grid, Typography } from "@material-ui/core";

type Props = {};
export const CC = (props: Props) => {
  const usersCC = useSelector((state: RootState) => state.usersCC.usersCC);
  const dispatch = useDispatch();

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            CC
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="CC"
            tags={usersCC}
            onAddition={(onAddition) => dispatch(addemailCC(onAddition))}
            onDelete={(onDelete) => dispatch(removemailCC(onDelete))}
            suggestions={suggestions}
            allowNew
          />
        </Box>
      </Box>
    </Grid>
  );
};
