
import constants from "../constants/user-constants"
import update from 'immutability-helper';
import 'babel-polyfill';

const initialState= [

    ];

const message = (state=initialState,action) => {

    switch(action.type){
        case constants.FETCH_MESSAGE_SUCCESS:
            return update(state, {$set: action.response});
        case constants.FETCH_MESSAGE_FAILURE:
            return state;
        case constants.SEND_MESSAGE_REQUEST:
            return update(state,{$push:[action.message]});
        case constants.SEND_MESSAGE_SUCCESS:
            let messageIndex = state.findIndex((message)=>message.uuid == action.response.uuid);
            return update(state,{ [messageIndex]: { $set: action.response }});
        case constants.SEND_MESSAGE_FAILURE:
            return state;
        case constants.RECEIVE_MESSAGE:
            return update(state,{$push:[action.message]});
        default:
            return state;
    }
}

export default message;