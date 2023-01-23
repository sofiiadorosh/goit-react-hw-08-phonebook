import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectModalState,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactsSection, Container, ContactWrapper } from './Contacts.styled';
import { Notification } from 'components/Notification';

export default function Contacts() {
  const contacts = useSelector(selectFilteredContacts);
  const modalState = useSelector(selectModalState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!modalState) {
      dispatch(fetchContacts());
    }
  }, [dispatch, modalState]);

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
