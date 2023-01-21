import styled from 'styled-components';

const Field = styled.div`
  position: relative;

  border-radius: 15px;
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

  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
    transform: translateY(-35px) scale(0.8);

    color: #010101;
    background-color: #fefefe;
  }
`;

const Input = styled.input`
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
`;

export { Field, Label, Input };
