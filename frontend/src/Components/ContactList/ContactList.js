import React, {useEffect} from 'react'
import { getContacts } from '../../JS/Actions/actionsContact';
import {useDispatch, useSelector} from 'react-redux'
import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard';
import {Spinner} from 'react-bootstrap'

const ContactList = () => {

const contacts = useSelector(state => state.contactReducer.contacts)  
const isLoading = useSelector(state => state.contactReducer.isLoading)  

const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch]);

    return (
        <div> 
             <h1>List of contacts </h1>
             { isLoading? <Spinner animation="border" variant="info" />
            :
        <div className="contacts-list ">
           
           {contacts.map(contact =>
           <ContactCard key={contact._id} contact={contact} />
           )}
           
          </div>
          }
        </div>
    )
}

export default ContactList
