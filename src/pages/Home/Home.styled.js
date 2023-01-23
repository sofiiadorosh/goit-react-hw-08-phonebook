import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HomeSection = styled.section`
  padding: 36px 0;
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

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
  }

  p {
    line-height: 1.2;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 42px;
      font-weight: 800;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-align: left;

    div {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    h1 {
      font-size: 56px;
    }

    img {
      display: block;
      width: 540px;
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 60px;

  margin: 0 auto;

  color: #1e1e1e;
  background-color: rgba(191, 191, 191, 0.5);

  border-radius: 10px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fefefe;
    background-color: #1e1e1e;
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`;

export { HomeSection, Container, Wrapper, StyledLink };
