import { IoIosHome, IoIosContacts, IoIosPersonAdd } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav, StyledLink } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <StyledLink to="/">
        <IoIosHome size={24} />
        <span>Home</span>
      </StyledLink>
      {isLoggedIn && (
        <>
          <StyledLink to="/contacts">
            <IoIosContacts size={24} />
            <span>Contacts</span>
          </StyledLink>
          <StyledLink to="/addcontact">
            <IoIosPersonAdd size={24} />
            <span>Add contact</span>
          </StyledLink>
        </>
      )}
    </Nav>
  );
}
