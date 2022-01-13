import * as authAction from "../actions/action";
import initialState from "./initialState.json";

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case authAction.SIGN_UP_REQUEST:
            return {...state, loading: true }
        case authAction.SIGN_UP_SUCCESS:
            return {...state, loading: false }
        case authAction.SIGN_UP_FAILED:
            return {...state, loading: false, error: action.payload }

        case authAction.SIGN_IN_REQUEST:
            return {...state, loading: true }
        case authAction.SIGN_IN_SUCCESS:
            return {...state, loading: false }
        case authAction.SIGN_IN_FAILED:
            return {...state, loading: false, error: action.payload }
        case authAction.REMOVE_ERROR:
            return {...state, error: '' }
        default:
            return state
    }
}
export default authReducer