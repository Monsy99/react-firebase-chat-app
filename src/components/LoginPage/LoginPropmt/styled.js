import styled from "styled-components";

const Container = styled.section`
  display: grid;
  margin: 0 auto;
  margin-top: 20vh;
  padding: 32px;
  text-align: center;
  width: 40%;
  justify-items: center;
  background-color: ${({ theme }) => theme.color.shark};
  border-radius: 15px;
  @media (max-width: 1024px) {
    width: unset;
    padding: 18px;
    max-width: 80%;
  }
`;
const Header = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 140%;
`;
const Paragraph = styled.p`
  margin-top: 22px;
  font-size: 22px;
  line-height: 140%;
`;

export { Container, Header, Paragraph };
