// @flow
import * as React from "react";
import ReactTags from "react-tag-autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { addemailCC, removemailCC, updatemailCC } from "../store/CCSlice";
import { RootState } from "../store";
import { suggestions } from "../utils/conf";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

type Props = {};
export const CCContacts = (props: Props) => {
  const usersCC = useSelector((state: RootState) => state.usersCC.usersCC);

  console.log("usersCC", usersCC);
  const usersCC2 = useSelector((state: RootState) => state.usersCC.usersCC);

  const L1ApproversCC = useSelector(
    (state: RootState) => state.reportMetadata.L1Approvers.L1Approver
  );
  const RWDsApprovers: any = useSelector(
    (state: RootState) => state.reportMetadata.RWDsApprovers.RWD
  );

  const [checkedRWD, setcheckedFormRWD] = React.useState(false);
  const [checkedL1, setcheckedFormL1] = React.useState(false);
  const [
    checkedResearchWriters,
    setcheckedFormResearchWriters,
  ] = React.useState(false);
  const [checkedCoAuthors, setcheckedFormCoAuthors] = React.useState(false);
  const [checkedKPRs, setcheckedFormKPRs] = React.useState(false);
  const [checkedFactCheckers, setcheckedFormFactCheckers] = React.useState(
    false
  );
  const [
    checkedAssociateAnalyst,
    setcheckedFormAssociateAnalyst,
  ] = React.useState(false);

  const [checkedCollaborators, setcheckedCollaborators] = React.useState(false);

  const [checkedAll, setcheckedAll] = React.useState(false);

  const dispatch = useDispatch();

  const handleChangeL1CCContacts = () => {
    setcheckedFormL1(!checkedL1);
    const L1mails = L1ApproversCC.map((obj: { Email: never }) => {
      return obj.Email;
    });
    const uniqueArray = L1mails.filter(function (item: any, pos: any) {
      return L1mails.indexOf(item) == pos;
    });
    if (Array.isArray(uniqueArray)) {
      //console.log("uniqueArray1", uniqueArray);
      uniqueArray.map((obj: { Email: never }) => {
        dispatch(addemailCC({ name: obj }));
      });
    } else {
      // console.log("uniqueArray2", uniqueArray);
      dispatch(addemailCC({ name: uniqueArray }));
    }
  };

  const handleChangeRWDCCContacts = () => {
    let RWDmails = {};
    console.log(Array.isArray(RWDsApprovers));
    if (Array.isArray(RWDsApprovers)) {
      RWDmails = RWDsApprovers.map((obj: { Email: any }) => {
        name: obj.Email;
      });
    } else {
      RWDmails = { name: RWDsApprovers.Email };
    }
    setcheckedFormRWD(!checkedRWD);
    //alert(checkedRWD);
    if (checkedRWD) {
      if (Array.isArray(RWDsApprovers)) {
        RWDmails = RWDsApprovers.map((obj: { Email: any }) =>
          dispatch(updatemailCC({ name: obj.Email }))
        );
      } else {
        dispatch(updatemailCC(RWDmails));
      }
    } else {
      console.log("RWDmails", RWDmails);
      console.log("usersCC", usersCC);
      if (Array.isArray(RWDsApprovers)) {
        RWDmails = RWDsApprovers.map((obj: { Email: any }) =>
          dispatch(addemailCC({ name: obj.Email }))
        );
      } else {
        dispatch(addemailCC(RWDmails));
      }
    }
  };

  const [showResults, setShowResults] = React.useState(false);

  const onClickPlus = () => {
    setShowResults(true);
  };

  const onClickMinus = () => {
    setShowResults(false);
  };

  const [showLabelAll, setLabelAll] = React.useState("");

  const handleChangeAll = (label: any) => {
    alert("handleChandsgeAll");
    console.log(label);
    setLabelAll(label);
  };

  return (
    <Grid item style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row" bgcolor="background.paper">
        <Box p={1.8} bgcolor="#f50057" color="white" width={120}>
          <Typography variant="h6" gutterBottom>
            CCContacts
          </Typography>
          <div>
            <AddCircleOutlinedIcon onClick={onClickPlus} />
            <RemoveOutlinedIcon onClick={onClickMinus} />
          </div>
        </Box>
        <Box height="100%" style={{ width: "100%" }}>
          <ReactTags
            id="CCContacts"
            tags={usersCC}
            onAddition={(onAddition) => dispatch(addemailCC(onAddition))}
            onDelete={(onDelete) => dispatch(removemailCC(onDelete))}
            suggestions={suggestions}
            allowNew
          />

          {showResults ? (
            <div>
              <div> {showLabelAll}</div>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedAll}
                        onChange={(AllRoles) => handleChangeAll("AllRoles")}
                        name="All Roles"
                      />
                    }
                    label="All Roles"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedCollaborators}
                        onChange={handleChangeRWDCCContacts}
                        name="Collaborators"
                      />
                    }
                    label="Collaborators"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedRWD}
                        onChange={handleChangeRWDCCContacts}
                        name="RWD"
                      />
                    }
                    label="RWD"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedL1}
                        onChange={handleChangeL1CCContacts}
                        name="L1Approvers"
                      />
                    }
                    label="L1Approvers"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedResearchWriters}
                        onChange={handleChangeL1CCContacts}
                        name="Research Writers"
                      />
                    }
                    label="Research Writers"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedCoAuthors}
                        onChange={handleChangeL1CCContacts}
                        name="Co-Authors"
                      />
                    }
                    label="Co-Authors"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedKPRs}
                        onChange={handleChangeL1CCContacts}
                        name="KPR's"
                      />
                    }
                    label="KPR's"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedFactCheckers}
                        onChange={handleChangeL1CCContacts}
                        name="Fact Checkers"
                      />
                    }
                    label="Fact Checkers"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedAssociateAnalyst}
                        onChange={handleChangeL1CCContacts}
                        name="Associate Analyst"
                      />
                    }
                    label="Associate Analyst"
                  />
                </FormGroup>
              </FormControl>
            </div>
          ) : null}
        </Box>
      </Box>
    </Grid>
  );
};
