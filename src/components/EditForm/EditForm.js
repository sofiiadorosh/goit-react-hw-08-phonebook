import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectId,
  selectError,
} from 'redux/contacts/selectors';
import { setModal } from 'redux/modal/slice';
import { editContact } from 'redux/contacts/operations';
import {
  EditContactForm,
  FormControls,
  Input,
  Label,
  Error,
  Button,
} from './EditForm.styled';

export function EditForm() {
  const contacts = useSelector(selectContacts);
  const contactId = useSelector(selectId);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const contactInformation = contacts.find(({ id }) => id === contactId);
  const { id, name, number } = contactInformation;

  const informAboutEditing = () => {
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
      toast.success('The contact was successfully updated.', {
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

  const initialValues = {
    name: name,
    number: number,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    number: Yup.string().required('This field is required'),
  });

  const handleSubmit = values => {
    dispatch(editContact({ id, contact: values }));
    dispatch(setModal());
    informAboutEditing();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <EditContactForm autoComplete="off">
        <Toaster position="top-right" reverseOrder={false} />
        <FormControls>
          <Input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
            autoFocus
          />
          <Label htmlFor={nameId}>Name</Label>
          <Error component="div" name="name" />
        </FormControls>
        <FormControls>
          <Input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
          />
          <Label htmlFor={numberId}>Number</Label>
          <Error component="div" name="number" />
        </FormControls>
        <Button type="submit">Save changes</Button>
      </EditContactForm>
    </Formik>
  );
}
