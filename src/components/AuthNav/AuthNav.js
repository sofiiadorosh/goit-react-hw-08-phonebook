import { IoPersonAdd } from 'react-icons/io5';
import { GoSignIn } from 'react-icons/go';
import { Nav, StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Nav>
      <StyledLink to="/register">
        <IoPersonAdd size={24} />
        <span>Sign Up</span>
      </StyledLink>
      <StyledLink to="/login">
        <GoSignIn size={24} />
        <span>Sign In</span>
      </StyledLink>
    </Nav>
  );
}
