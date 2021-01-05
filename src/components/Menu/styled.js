import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  width: 100%;
`;
const Title = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  &::before {
    content: "#";
    font-size: 20px;
  }
`;
const Room = styled.div`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 4px 0;
`;

export { Container, StyledLink, Room, Title };
