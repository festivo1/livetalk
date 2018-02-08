import {combineReducers} from "redux";
import authentication from "./authentication"
import alert from "./alert"

const rootReducers = combineReducers({
    authentication,
    alert
});

export default rootReducers;