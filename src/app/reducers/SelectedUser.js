import constants from "../constants/user-constants"
import update from 'immutability-helper';

const initialState= {user:'', select:false};

const selected = (state=initialState,action) => {

    switch(action.type){
        case constants.SELECTED_USER:
            return update(state, {$set: action.user});
        default:
            return state;
    }
}

export default selected;

