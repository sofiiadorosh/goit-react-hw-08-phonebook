import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  SignInForm,
  FormControls,
  Input,
  Label,
  Button,
} from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SignInForm autoComplete="off">
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
        <Button type="submit">Sign In</Button>
      </SignInForm>
    </Formik>
  );
}
