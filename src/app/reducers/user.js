
import constants from "../constants/user-constants"
import update from 'immutability-helper';

const initialState= {
    show:false,
    type:'',
    message:''
}

const user = (state=initialState,action) => {

    switch(action.type){
        case constants.ADD_USER_REQUEST:
            return update(state, {$set: {show:true,type:'info',message:'Info: Sending user information...'}});
        case constants.ADD_USER_SUCCESS:
            return update(state, {$set: {show:true,type:'success',message:'Success: User added'}});
        case constants.ADD_USER_FAILURE:
            return update(state, {$set: {show:true,type:'error',message:'Error: User cannot be added'}});
        case constants.USER_MESSAGE_CLOSE:
            return update(state, {$set: {show:action.show,type:'',message:''}});
        default:
            return state;
    }
}

export default user;