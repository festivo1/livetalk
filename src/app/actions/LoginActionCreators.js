
import constants from "../constants/user-constants"
import UserAPI from "../api/UserAPI";
import AlertActionCreators from "./AlertActionCreators";


let LoginActionCreators = {

    login(username, password) {
        return (dispatch) => {
            dispatch({ type: constants.LOGIN_REQUEST });
            UserAPI.login(username,password).then(
                (user) => {
                        dispatch({type: constants.LOGIN_SUCCESS, success:true, user});
                        history.push('/dashboard')
                },
                (error) => {
                    console.log(error);
                    dispatch({ type: constants.LOGIN_FAILURE, success:false });
                    dispatch(AlertActionCreators.error(error))
                });
        }
    }

}

export default LoginActionCreators;