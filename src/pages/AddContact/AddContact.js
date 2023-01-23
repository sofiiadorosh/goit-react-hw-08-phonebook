import { ContactForm } from 'components/ContactForm';
import { AddContactSection, Container } from './AddContact.styled';

export default function AddContact() {
  return (
    <AddContactSection>
      <Container>
        <ContactForm />
      </Container>
    </AddContactSection>
  );
}
