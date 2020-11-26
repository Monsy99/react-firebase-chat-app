import styled from "styled-components";

const NavBar = styled.nav`
    width:100%;
    max-width:1200px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin: 0 auto;
`;
const Logo = styled.h1`
margin: 0 12px;
font-family: 'Sansita Swashed', cursive;
font-size: 28px;
font-weight:bold;
color:#eee;
padding: 12px;
`;

export {NavBar, Logo}