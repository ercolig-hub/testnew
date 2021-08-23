import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

const initialState = {
  loadingMetaReport: true,
  hasErrorsMetaReport: false,
  responseMetaReport: [],
  L1Approvers: [],
  RWDsApprovers: [],
};

export const responseMetaReportSlice = createSlice({
  name: "reportMetadata",
  initialState,

  reducers: {
    getMetaReport: (state) => {
      state.loadingMetaReport = true;
    },
    getMetaReportSuccess: (state, { payload }) => {
      state.responseMetaReport = payload;
      state.loadingMetaReport = false;
      state.hasErrorsMetaReport = false;
    },
    getMetaReportL1Approvers: (state, { payload }) => {
      state.loadingMetaReport = true;
      state.L1Approvers = payload;
    },
    getMetaReportRWDsApprovers: (state, { payload }) => {
      state.loadingMetaReport = true;
      state.RWDsApprovers = payload;
    },
    getMetaReportFailure: (state) => {
      state.loadingMetaReport = false;
      state.hasErrorsMetaReport = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getMetaReport,
  getMetaReportSuccess,
  getMetaReportFailure,
  getMetaReportL1Approvers,
  getMetaReportRWDsApprovers,
} = responseMetaReportSlice.actions;

export default responseMetaReportSlice.reducer;

export function fetchMetaReport() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(getMetaReport());

    try {
      const response = await axios.get(
        "https://mth-cms-meth01-tom-dv3:31801/restAPI/rest/v3/object/1.1.3582115486?token=5fcae86b-5d2e-4939-8384-cc8e234d853c&showUsageTickets=false&showVirtualAttributes=false&showSystemAttributes=false&showAdditionalInfo=false&showXml=false&_=1620288130611"
      );
      dispatch(getMetaReportSuccess(response.data.result.attributes.Metadata));
      dispatch(
        getMetaReportL1Approvers(
          response.data.result.attributes.Metadata.Collaborators.L1Approvers
        )
      );

      dispatch(
        getMetaReportRWDsApprovers(
          response.data.result.attributes.Metadata.Collaborators.RWDs
        )
      );
    } catch (error) {
      console.log("error", error);
      dispatch(getMetaReportFailure());
    }
  };
}
