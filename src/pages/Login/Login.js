import { LoginForm } from 'components/LoginForm';
import { SignInSection, Container } from './Login.styled';

export function Login() {
  return (
    <SignInSection>
      <Container>
        <LoginForm />
      </Container>
    </SignInSection>
  );
}
