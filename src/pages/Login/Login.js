import { LoginForm } from 'components/LoginForm';
import { SignInSection, Container } from './Login.styled';

export default function Login() {
  return (
    <SignInSection>
      <Container>
        <LoginForm />
      </Container>
    </SignInSection>
  );
}
