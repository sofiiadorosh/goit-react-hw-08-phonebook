import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem';
import { Contacts } from './ContactsList.styled';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </Contacts>
  );
}
