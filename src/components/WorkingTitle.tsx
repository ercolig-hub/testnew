// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";

import { Box, Grid, Typography } from "@material-ui/core";

type Props = {};
export const WorkingTitle = (props: Props) => {
  const WorkingTitleText = useSelector(
    (state: RootState) => state.responseMeta.WorkingTitle
  );
  const dispatch = useDispatch();

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            Working Title
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          {WorkingTitleText}
        </Box>
      </Box>
    </Grid>
  );
};
