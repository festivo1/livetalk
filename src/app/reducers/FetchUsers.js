
import constants from "../constants/user-constants"
import update from 'immutability-helper';

const initialState= [];

const users = (state=initialState,action) => {

    switch(action.type){
        case constants.FETCH_USER_SUCCESS:
            return update(state, {$set: action.response});
        default:
            return state;
    }
}

export default users;