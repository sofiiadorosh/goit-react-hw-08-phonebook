import heroPicture from '../../images/hero.png';
import { HomeSection, Container, Wrapper, StyledLink } from './Home.styled';

export default function Home() {
  return (
    <HomeSection>
      <Container>
        <Wrapper>
          <div>
            <h1>Welcome to Phonebook App</h1>
            <p>
              Are you looking for a free contact management tool that’ll help
              you become more productive and speed up the communication process?
              If yes, then Phonebook is the app for you. It lets you store all
              your contacts under a single umbrella.
            </p>
            <StyledLink to="/register">Get Started</StyledLink>
          </div>
          <img src={heroPicture} alt="People with phones" />
        </Wrapper>
      </Container>
    </HomeSection>
  );
}
