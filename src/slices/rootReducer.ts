import {combineReducers} from "redux";
import bookReducer from "./bookSlice";

export const rootReducer = combineReducers({books: bookReducer});
export type RootState = ReturnType<typeof rootReducer>;