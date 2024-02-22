import { combineReducers } from "redux";
import accountReducer from "./AccountReducer";

export default combineReducers({
    account:accountReducer
});