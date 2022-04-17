import { combineReducers } from "redux";
import sessionReducer from "./data/SessionReducer";

const appReducer = combineReducers({
  session: sessionReducer
});

export default appReducer;
