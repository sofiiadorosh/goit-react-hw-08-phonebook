import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 36px;

  background-color: #e7ecf2;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  transform: translate(-50%, -50%) scale(1);
`;

export { Overlay, ModalWindow };
