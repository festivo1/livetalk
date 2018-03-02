import {combineReducers} from "redux";
import authentication from "./authentication"
import users from "./FetchUsers"
import alert from "./alert"
import message from "./Message"
import selected from './SelectedUser'
import { reducer as reduxFormReducer } from 'redux-form';
import user from "./user"
const rootReducers = combineReducers({
    authentication,
    alert,
    users,
    message,
    form: reduxFormReducer,
    user,
    selected
});

export default rootReducers;