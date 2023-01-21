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

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  p {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      stroke: #252f38;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  height: 40px;

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

  &:disabled {
    background-color: #e2e2e2;
    color: #636363;
  }
`;

export { Contact, ContactWrapper, Button };
