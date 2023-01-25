import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import {
  SignInForm,
  FormControls,
  Input,
  Label,
  Button,
} from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const emailId = nanoid();
  const passwordId = nanoid();

  const initialValues = {
    email: '',
    password: '',
  };

  const informAboutLogIn = () => {
    if (error) {
      toast.error('Incorrect e-mail address or password.', {
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
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    informAboutLogIn();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SignInForm autoComplete="off">
        <Toaster position="top-right" reverseOrder={false} />
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
