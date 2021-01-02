import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.6);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  width: 100%;
`;
const Room = styled.div`
  width: 100%;
  padding: 4px 12px;
  border-bottom: 1px solid #eee;
`;

export { Container, StyledLink, Room };
