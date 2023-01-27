import PropTypes from 'prop-types';
import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from 'redux/modal/slice';
import { selectModalState } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal';
import {
  Contact,
  ContactWrapper,
  ButtonWrapper,
  Button,
} from './ContactListItem.styled';

export function ContactListItem({ contact: { id, name, number } }) {
  const modalState = useSelector(selectModalState);
  const dispatch = useDispatch();

  return (
    <>
      <Contact>
        <ContactWrapper>
          <p>
            <HiOutlineUserCircle size={24} />
            <span>{name}</span>
          </p>
          <p>
            <HiOutlinePhone size={24} />
            <span>{number}</span>
          </p>
        </ContactWrapper>
        <ButtonWrapper>
          <Button type="button" onClick={() => dispatch(setModal(id))}>
            <MdModeEdit size={24} />
            <span>Edit</span>
          </Button>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <MdOutlineDelete size={24} />
            <span>Delete</span>
          </Button>
        </ButtonWrapper>
      </Contact>
      {modalState && <Modal />}
    </>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
