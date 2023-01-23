import styled from 'styled-components';

const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  font-size: 24px;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  cursor: pointer;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #010101;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media screen and (max-width: 479px) {
    font-size: 16px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      stroke: #252f38;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  padding: 8px;

  font-size: 16px;
  letter-spacing: 1px;

  color: #010101;
  background-color: #ededed;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fefefe;
    background-color: #e1503d;
    border-color: #e1503d;
  }

  :first-child {
    &:hover,
    &:focus {
      color: #fefefe;
      background-color: #2196f3;
      border-color: #2196f3;
    }
  }

  &:disabled {
    background-color: #e2e2e2;
    color: #636363;
  }

  @media screen and (min-width: 480px) {
    min-width: 100px;
    height: 40px;
  }

  span {
    display: none;

    @media screen and (min-width: 480px) {
      display: inline-flex;
    }
  }
`;

export { Contact, ContactWrapper, ButtonWrapper, Button };
