import styled from 'styled-components';

const Header = styled.header`
  padding: 12px 0;

  background-color: #fefefe;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Header, Container, StyledNav };
