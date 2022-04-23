import { combineReducers } from "redux";
import sessionReducer from "./session/session-reducer";

const appReducer = combineReducers({
  session: sessionReducer
});

export default appReducer;
