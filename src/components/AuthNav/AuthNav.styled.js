import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 12px 12px;
  border-radius: 10px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    span {
      display: inline-flex;
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }

  &.active {
    color: #fefefe;
    background-color: #1e1e1e;
  }
`;

export { Nav, StyledLink };
