import {combineReducers} from "redux";
import authentication from "./authentication"
import users from "./FetchUsers"
import alert from "./alert"
import { reducer as reduxFormReducer } from 'redux-form';
import user from "./user"
const rootReducers = combineReducers({
    authentication,
    alert,
    users,
    form: reduxFormReducer,
    user
});

export default rootReducers;