import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const NavBar = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-shadow: 0 0px 5px rgba(255, 255, 255, 0.6);
`;
const Logo = styled.h1`
  margin: 0 12px;
  font-family: "Sansita Swashed", cursive;
  font-size: 28px;
  font-weight: bold;
  color: #eee;
  padding: 12px;
`;

export { NavBar, Logo, StyledLink };
