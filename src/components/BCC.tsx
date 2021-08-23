// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailBCC, removemailBCC } from "../store/BCCSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Grid, Typography } from "@material-ui/core";

type Props = {};
export const BCC = (props: Props) => {
  const usersBCC = useSelector((state: RootState) => state.usersBCC.usersBCC);
  const dispatch = useDispatch();

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            BCC
          </Typography>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="BCC"
            tags={usersBCC}
            onAddition={(onAddition) => dispatch(addemailBCC(onAddition))}
            onDelete={(onDelete) => dispatch(removemailBCC(onDelete))}
            suggestions={suggestions}
            allowNew
          />
        </Box>
      </Box>
    </Grid>
  );
};
