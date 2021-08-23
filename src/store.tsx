import { configureStore } from "@reduxjs/toolkit";

import FROMSlice from "./store/FromSlice";
import CCSlice from "./store/CCSlice";
import BCCSlice from "./store/BCCSlice";
import ABCCSlice from "./store/ABCCSlice";
import TOSlice from "./store/TOSlice";
import Suggestions from "./store/Suggestions";
import ResponseMetadata from "./store/ResponseMetadata";
import ReportMetadata from "./store/ReportMetadata";

export const store = configureStore({
  reducer: {
    usersFROM: FROMSlice,
    usersTO: TOSlice,
    usersCC: CCSlice,
    usersBCC: BCCSlice,
    usersABCC: ABCCSlice,
    recipe: Suggestions,
    responseMeta: ResponseMetadata,
    reportMetadata: ReportMetadata,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
