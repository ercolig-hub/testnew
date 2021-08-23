// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";

import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";

type Props = {};

const handleChangeCheckbox = () => {
  console.log(handleChangeCheckbox);
};

export const PdfSuppression = (props: Props) => {
  const WorkingTitleText = useSelector(
    (state: RootState) => state.responseMeta.WorkingTitle
  );
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [checkedForm, setcheckedForm] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setcheckedForm(!checkedForm);
  };

  const handleCloseDialogNo = () => {
    setOpen(false);
    setcheckedForm(false);
  };

  const handleCloseDialogYes = () => {
    setOpen(false);
    setcheckedForm(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="row" bgcolor="background.paper">
      <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
        <Typography variant="h6" gutterBottom>
          PDF SUPP
        </Typography>
      </Box>
      <Box height="47.2px" style={{ width: "100%" }} border={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedForm}
              onChange={handleClickOpen}
              name="checkedA"
            />
          }
          label="I want to suppress the current PDF and import a redacted version of
        the report"
        />

        <Dialog
          open={open}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Checking this box requires you to attach a redacted PDFto send
              pre-publication email. Do you want to continue ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogYes} color="primary" autoFocus>
              Yes
            </Button>
            <Button onClick={handleCloseDialogNo} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};
