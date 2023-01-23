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
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .min(4, 'Must be 4 characters or more.')
      .max(32, 'Must be 32 characters or less.')
      .required('This field is required.'),
    email: Yup.string()
      .email('Invalid e-mail address.')
      .required('This field is required.'),
    password: Yup.string()
      .minUppercase(1, 'Password must contain at least 1 uppercase letter.')
      .minLowercase(6, 'Password must contain at least 6 lowercase letters.')
      .minNumbers(1, 'Password must contain at least 1 number.')
      .minSymbols(1, 'Password must contain at least 1 symbol.')
      .required('This field is required.'),
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
          <Input id={nameId} type="text" name="name" placeholder=" " />
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
