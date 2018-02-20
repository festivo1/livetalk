
import constants from "../constants/user-constants"
import update from 'immutability-helper';

const initialState= [];

const users = (state=initialState,action) => {

    switch(action.type){
        case constants.FETCH_USER_SUCCESS:
            return update(state, {$set: action.response});
        case constants.UPDATE_USER_SUCCESS:
            return Array.from(new Set(update(state, {$push: [action.response]})));
        default:
            return state;
    }
}

export default users;