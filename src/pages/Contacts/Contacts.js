import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactsSection, Container, ContactWrapper } from './Contacts.styled';
import { Notification } from 'components/Notification';

export function Contacts() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactsSection>
      <Container>
        <ContactWrapper>
          <Filter />
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Notification message="There is no contacts." />
          )}
        </ContactWrapper>
      </Container>
    </ContactsSection>
  );
}
