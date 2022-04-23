import { combineReducers } from "redux";
import sessionReducer from "./session/SessionReducer";

const appReducer = combineReducers({
  session: sessionReducer
});

export default appReducer;
