import * as contactActions from '../actions/action';
import initialState from '../reducers/initialState.json';


const contactReducer = (state = initialState.contact, action) => {
    switch (action.type) {
        case contactActions.SET_CONTACT:
            return {...action.payload, }
        case contactActions.UPDATE_CONTACT:
            {
                return {...action.payload }
            }
        default:
            return state
    }
}

export default contactReducer;