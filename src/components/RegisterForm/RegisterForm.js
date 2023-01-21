import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  SignUpForm,
  FormControls,
  Input,
  Label,
  Button,
} from './RegisterForm.styled';

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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    // resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SignUpForm autoComplete="off">
        <FormControls>
          <Input id={nameId} type="text" name="name" placeholder=" " />
          <Label htmlFor={nameId}>Name</Label>
        </FormControls>
        <FormControls>
          <Input id={emailId} type="email" name="email" placeholder=" " />
          <Label htmlFor={emailId}>E-mail</Label>
        </FormControls>
        <FormControls>
          <Input
            id={passwordId}
            type="password"
            name="password"
            placeholder=" "
          />
          <Label htmlFor={passwordId}>Password</Label>
        </FormControls>
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
    </Formik>
  );
}
