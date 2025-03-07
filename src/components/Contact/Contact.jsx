import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsOps"
// import { deleteContact } from "../../redux/contactsSlice"

export default function Contact({ contact }) {
    const dispatch = useDispatch()
    
    const handleClickDelete = (id) => {
    dispatch(deleteContact(id))
    // setContact(contacts.filter(contact => contact.id !== id))
    }

    return (
        <>
            <p>{ contact.name }</p>
            <p>{ contact.number }</p>
            <button type="button" onClick={() => handleClickDelete(contact.id)}>Delete</button>
        </>
    )
}