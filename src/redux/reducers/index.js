import { combineReducers } from "redux";
import { uploadBookReducer } from "./uploadBook.reducer";

export const rootReducer = combineReducers({
  uploadBook: uploadBookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
