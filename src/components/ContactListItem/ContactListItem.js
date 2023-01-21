import PropTypes from 'prop-types';
import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Contact, ContactWrapper, Button } from './ContactListItem.styled';

export function ContactListItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactWrapper>
        <p>
          <HiOutlineUserCircle size={20} />
          <span>{name}</span>
        </p>
        <p>
          <HiOutlinePhone size={20} />
          <span>{number}</span>
        </p>
      </ContactWrapper>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Contact>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
