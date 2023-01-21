import { MdOutlineAppRegistration, MdLogout } from 'react-icons/md';
import { Nav, StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Nav>
      <StyledLink to="/register">
        <MdOutlineAppRegistration size={24} />
        <span>Sign Up</span>
      </StyledLink>
      <StyledLink to="/login">
        <MdLogout size={24} />
        <span>Sign In</span>
      </StyledLink>
    </Nav>
  );
}
