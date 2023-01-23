import styled from 'styled-components';

const ContactsSection = styled.section`
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

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 20px;
  margin: 0 auto;
  width: 99%;

  background-color: #fefefe;

  border-radius: 15px;

  text-align: center;

  @media screen and (min-width: 768px) {
    width: 510px;
  }
`;

export { ContactsSection, Container, ContactWrapper };
