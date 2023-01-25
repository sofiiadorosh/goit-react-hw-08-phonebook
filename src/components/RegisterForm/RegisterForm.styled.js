import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 36px 24px;
  margin: 0 auto;

  width: 99%;

  background-color: #fefefe;

  box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    width: 610px;
  }
`;

const FormControls = styled.div`
  position: relative;
`;

const Title = styled.div`
  margin-bottom: 12px;
  padding-left: 4px;
  font-size: 12px;
`;

const Input = styled(Field)`
  width: 100%;
  height: 50px;

  padding: 8px 16px;

  font-size: 16px;

  color: #010101;
  background-color: transparent;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:not(:placeholder-shown) {
    border-color: #010101;
  }
  &:not(:focus) {
    border-color: rgb(200, 200, 200);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  padding: 2px;

  font-size: 16px;

  color: rgb(200, 200, 200);

  pointer-events: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:focus ~ &,
  input:not(:placeholder-shown) ~ & {
    transform: translateY(-35px) scale(0.8);
    color: #010101;
    background-color: #fefefe;
  }
`;

const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -30%;
  left: 4px;
  font-size: 12px;
  color: #ff4500;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  min-width: 150px;
  height: 50px;

  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;

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
    background-color: #1d976c;
    border-color: #1d976c;
  }
  &:disabled {
    background-color: #e2e2e2;
    color: #636363;
  }
`;

export { SignUpForm, FormControls, Title, Input, Label, Error, Button };
