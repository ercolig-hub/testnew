// @flow
import { Button, Grid } from "@material-ui/core";
import * as React from "react";
type Props = {};
export const Pulsanti2 = (props: Props) => {
  return (
    <Grid container spacing={3} direction={"row"} justify={"flex-end"}>
      <Grid item>
        <Button variant="contained" color="secondary">
          Copy Email
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
