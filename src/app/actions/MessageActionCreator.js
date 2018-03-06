import MessageAPI from "../api/MessageAPI";
import constants from "../constants/user-constants"
let MessageActionCreator = {
    fetchMessage(creator, recipient){
        return (dispatch) => {
            dispatch({ type: constants.FETCH_MESSAGE_REQUEST});
            MessageAPI.fetchMessage(creator,recipient).then(
                (response) => {
                    dispatch({type: constants.FETCH_MESSAGE_SUCCESS, success:true, response});
                },
                (error) => {
                    console.log(error);
                    dispatch({ type: constants.FETCH_MESSAGE_FAILURE, success:false });
                });
        }
    },

    selectUser(user){
        return (dispatch) =>{
            dispatch({type: constants.SELECTED_USER,user});
        }
    },

    sendMessage(message){
        return (dispatch) => {
            dispatch({ type: constants.SEND_MESSAGE_REQUEST, message});
            MessageAPI.sendMessage(message).then(
                (response) => {
                    dispatch({type: constants.SEND_MESSAGE_SUCCESS, success:true, response});
                },
                (error) => {
                    console.log(error);
                    dispatch({ type: constants.SEND_MESSAGE_FAILURE, success:false });
                });
        }
    },

    receiveMessage(message){
        return (dispatch) =>{
            dispatch({type: constants.RECEIVE_MESSAGE,message});
        }
    }
}

export default MessageActionCreator;