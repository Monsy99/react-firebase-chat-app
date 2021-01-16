import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.color.thunder};
  border-bottom: 2px solid ${({ theme }) => theme.color.midGray};
`;
const NavigationContainer = styled.section`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  margin: 0;
  font-family: "Sansita Swashed", cursive;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;

export { NavBar, Logo, NavigationContainer };
