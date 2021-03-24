import { GET_CONTACT, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, TOGGLE_FALSE, TOGGLE_TRUE } from "../Constants/actionTypes"

const initState = {
    contacts: [],
    errors: [],
    isLoading: false,
    user: {},
    isEdit: false
}

const contactReducer = (state=initState, {type, payload}) => {

    switch(type) {
        case GET_CONTACTS_LOAD : return {...state, isLoading:true}
        case GET_CONTACTS_SUCCESS : return {...state, isLoading:false, contacts: payload}
        case GET_CONTACTS_FAIL : return {...state, isLoading:true, errors: payload}
        case GET_CONTACT : return {...state, user: payload}
        case TOGGLE_TRUE: return {...state, isEdit: true}
        case TOGGLE_FALSE: return {...state, isEdit: false}
        default : return state

    }
}

export default contactReducer