import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

import { initialStateTO } from "../store/TOSlice";
import { initialStateFROM } from "../store/FromSlice";
import { initialStateCC } from "../store/CCSlice";
import { initialStateBCC } from "../store/BCCSlice";
import { initialStateABCC } from "../store/ABCCSlice";
const initialState = {
  loadingMeta: true,
  hasErrorsMeta: false,
  responseMeta: [],
  WorkingTitle: null,
  usersTO: [
    { id: 0, name: "TOgiuseppe.ercoli@eidosmedia.it" },
    { id: 1, name: "TOdavide.tinini@eidosmedia.it" },
  ],
};

export const responseMetaSlice = createSlice({
  name: "responseMetadata",
  initialState,

  reducers: {
    getMeta: (state) => {
      state.loadingMeta = true;
    },
    getMetaSuccess: (state, { payload }) => {
      state.responseMeta = payload;
      state.loadingMeta = false;
      state.hasErrorsMeta = false;
      state.usersTO = [{ id: 1, name: payload.To }];
    },
    getMetaWorkingTitle: (state, { payload }) => {
      state.WorkingTitle = payload;
    },
    getMetaFailure: (state) => {
      state.loadingMeta = false;
      state.hasErrorsMeta = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMeta, getMetaSuccess, getMetaFailure, getMetaWorkingTitle } =
  responseMetaSlice.actions;

export default responseMetaSlice.reducer;

export function fetchMeta() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(getMeta());

    try {
      const response = await axios.get(
        //"https://mth-cms-meth01-tom-dv3:31801/restAPI/rest/v3/object/1.1.3822512773?token=5fcae86b-5d2e-4939-8384-cc8e234d853c&showUsageTickets=false&showVirtualAttributes=false&showSystemAttributes=false&showAdditionalInfo=false&showXml=false"

        "https://vtommeth01-cms-dv-01.ad.moodys.net:3428/restAPI/rest/v3/object/2.0.1951162660?token=842df73f-8c4a-4598-9752-9409ea2a4166"
      );
      dispatch(getMetaSuccess(response.data.result.attributes.Metadata.Email));
      dispatch(
        getMetaWorkingTitle(
          response.data.result.attributes.Metadata.Report.WorkingTitle
        )
      );
      dispatch(
        initialStateTO(response.data.result.attributes.Metadata.Email.To)
      );
      dispatch(
        initialStateFROM(response.data.result.attributes.Metadata.Email.From)
      );
      dispatch(
        initialStateCC(response.data.result.attributes.Metadata.Email.CC)
      );
      dispatch(
        initialStateBCC(response.data.result.attributes.Metadata.Email.BCC)
      );
      dispatch(
        initialStateABCC(
          response.data.result.attributes.Metadata.Email.AdditionalBCC
        )
      );
    } catch (error) {
      console.log("error", error);
      dispatch(getMetaFailure());
    }
  };
}
