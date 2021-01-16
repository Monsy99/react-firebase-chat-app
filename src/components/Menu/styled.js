import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div``;

const Header = styled.header`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 22px;
  line-height: 130%;
  margin-top: 16px;
`;
const ChatroomsContainer = styled.div`
  display: grid;
  grid-gap: 6px;
  margin-top: 16px;
`;
const Room = styled(Link)`
  text-decoration: none;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  line-height: 130%;
  padding: 10px 16px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.charade};
  border-radius: 15px;
`;

export { Container, Room, Header, ChatroomsContainer };
