import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from 'redux/modal/slice';
import { EditForm } from 'components/EditForm';
import { Overlay, ModalWindow } from './Modal.styled';

export function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        dispatch(setModal());
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(setModal());
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <EditForm />
      </ModalWindow>
    </Overlay>,
    document.querySelector('#modal-root')
  );
}
