import { GoSignOut } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Nav, Button } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Nav>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <GoSignOut size={24} />
        <span>Sign Out</span>
      </Button>
    </Nav>
  );
}
