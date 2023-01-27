import { Formik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  SignUpForm,
  FormControls,
  Input,
  Label,
  Error,
  Button,
} from './RegisterForm.styled';
YupPassword(Yup);

export function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required.'),
    email: Yup.string()
      .email('Invalid e-mail address.')
      .required('This field is required.'),
    password: Yup.string().required('This field is required.'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <SignUpForm autoComplete="off">
        <FormControls>
          <Input
            id={nameId}
            type="text"
            name="name"
            placeholder=" "
            title="Name may contain only letters, apostrophe, dash and spaces, between 4 and 32 characters."
          />
          <Label htmlFor={nameId}>Name</Label>
          <Error component="div" name="name" />
        </FormControls>
        <FormControls>
          <Input id={emailId} type="email" name="email" placeholder=" " />
          <Label htmlFor={emailId}>E-mail</Label>
          <Error component="div" name="email" />
        </FormControls>
        <FormControls>
          <Input
            id={passwordId}
            type="password"
            name="password"
            placeholder=" "
          />
          <Label htmlFor={passwordId}>Password</Label>
          <Error component="div" name="password" />
        </FormControls>
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
    </Formik>
  );
}
