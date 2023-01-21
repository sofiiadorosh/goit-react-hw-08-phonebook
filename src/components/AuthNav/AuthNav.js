import { MdOutlineAppRegistration, MdLogin } from 'react-icons/md';
import { Nav, StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Nav>
      <StyledLink to="/register">
        <MdOutlineAppRegistration size={24} />
        <span>Sign Up</span>
      </StyledLink>
      <StyledLink to="/login">
        <MdLogin size={24} />
        <span>Sign In</span>
      </StyledLink>
    </Nav>
  );
}
