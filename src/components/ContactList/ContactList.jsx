import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import { selectFilteredContactsMemo } from '../../redux/selectors'
// import { selectContacts } from '../../redux/contactsSlice'

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContactsMemo)
    
    return (
        <ul>
            {filteredContacts.map((item) => (<li key={item.id}><Contact contact={item}/></li>))}
        </ul>
    )
}