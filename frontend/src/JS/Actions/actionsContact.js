import { GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE} from "../Constants/actionTypes"
import axios from 'axios'

export const getContacts = () => async (dispatch) => {
    dispatch({type : GET_CONTACTS_LOAD})
    try {
        const res = await axios.get('/contacts')
        dispatch({type : GET_CONTACTS_SUCCESS, payload : res.data.listContacts})
    } catch (error) {
        dispatch({type : GET_CONTACTS_FAIL, payload: error})
        console.log(error)
    }
}

//delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/contacts/${id}`)
        dispatch(getContacts())
    } catch(error) {
        console.log(error)
    }
}

//add contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post('/contacts/', newContact)
        dispatch(getContacts())
    } catch(error) {
        console.log(error)
    }
}

//edit contact
export const editContact = (id,newContact) => async (dispatch) => {
    try {
        await axios.put(`/contacts/${id}`, newContact)
        dispatch(getContacts())
    } catch(error) {
        console.log(error)
    }
}

//get one contact
export const getContact = (id) => async (dispatch) => {
    try {
       const res =  await axios.get(`/contacts/${id}`)
        dispatch({type: GET_CONTACT, payload: res.data.contactToFind})
    } catch(error) {
        console.log(error)
    }
}

//toggle true
export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}

// toggle false
export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}