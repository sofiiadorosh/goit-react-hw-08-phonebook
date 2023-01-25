import PropTypes from 'prop-types';
import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from 'redux/modal/slice';
import { selectModalState, selectError } from 'redux/contacts/selectors';
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
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const informAboutDeleting = () => {
    if (error) {
      toast.error('Something went wrong, try again later.', {
        style: {
          border: '1px solid #e1503d',
          boxShadow: 'none',
          fontSize: '16px',
        },
        iconTheme: {
          primary: '#e1503d',
          secondary: '#fefefe',
        },
      });
    } else {
      toast.success('The contact was successfully deleted.', {
        style: {
          border: '1px solid #1d976c',
          boxShadow: 'none',
          fontSize: '16px',
        },
        iconTheme: {
          primary: '#1d976c',
          secondary: '#fefefe',
        },
      });
    }
  };

  return (
    <>
      <Contact>
        <Toaster position="top-right" reverseOrder={false} />
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
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
              informAboutDeleting();
            }}
          >
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
