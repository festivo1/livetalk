import {combineReducers} from "redux";
import authentication from "./authentication"
import alert from "./alert"
import { reducer as reduxFormReducer } from 'redux-form';
import user from "./user"
const rootReducers = combineReducers({
    authentication,
    alert,
    form: reduxFormReducer,
    user
});

export default rootReducers;