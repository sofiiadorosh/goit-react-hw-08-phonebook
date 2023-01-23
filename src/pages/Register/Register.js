import { RegisterForm } from 'components/RegisterForm';
import { SignUpSection, Container } from './Register.styled';

export default function Register() {
  return (
    <SignUpSection>
      <Container>
        <RegisterForm />
      </Container>
    </SignUpSection>
  );
}
