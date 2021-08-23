// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailBCC, removemailBCC } from "../store/BCCSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import { Box, Button, Typography } from "@material-ui/core";

type Props = {};
export const ChooseFile = (props: Props) => {
  const handleFileInput = (e: any) => {
    // handle validations
    console.log(e.target.files[0]);
  };

  return (
    <Box>
      <Box p={1.8}>
        <Typography variant="h6" gutterBottom>
          File importato
        </Typography>
      </Box>
      <Box p={1.8}>
        <Box display="flex" flexDirection="row">
          <Box p={1.8}>file importato</Box>
          <Box p={1.8}>
            <Button variant="contained" color="secondary">
              <input type="file" onChange={handleFileInput}></input>
              Browse
            </Button>
          </Box>
        </Box>
      </Box>
      <Box p={1.8}>
        <Button variant="contained" color="secondary">
          Import
        </Button>
      </Box>
    </Box>
  );
};
