// @flow
import { Button, Grid } from "@material-ui/core";
import * as React from "react";
type Props = {};
export const Pulsanti1 = (props: Props) => {
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item>
        <Button variant="contained" color="secondary">
          Copy Email
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">
          Preview
        </Button>
      </Grid>
    </Grid>
  );
};
