import styled from "styled-components";

const RelativeDiv = styled.div`
  position: relative;
`;
const MessagesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 16px;
`;
const Message = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 8px 0;
  flex-direction: ${({ isAuthor }) => (isAuthor ? "row-reverse" : "unset")};
`;
const AuthorAvatar = styled.img`
  width: 45px;
  border-radius: 50%;
  align-self: flex-start;
`;
const MessageText = styled.p`
  font-size: 18px;
  background-color: #444;
  padding: 8px 12px;
  margin: 0 8px;
  border-radius: 10px;
`;
const MessageTime = styled.div`
  font-size: 14px;
  text-align: center;
  flex-grow: 0;
  color: #ccc;
  margin: 0 8px;
`;
const MessageForm = styled.form`
  width: calc(1200px - 300px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  position: fixed;
  bottom: 0;
  @media (max-width: 1200px) {
    width: calc(100% - 300px);
  }
`;
const FormInput = styled.input`
  font-family: "Roboto", sans-serif;
  padding: 12px;
  flex-grow: 1;
  font-size: 16px;
  color: #ddd;
  background-color: #222;
  border-radius: 0;
  border: none;
  &::placeholder {
  }
  &:focus {
    border: none;
    outline: none;
    background-color: #333;
  }
`;
const FormSubmit = styled.button`
  padding: 12px 20px;
  font-size: 26px;
  background-color: #333;
  border: none;
  color: white;
`;
export {
  RelativeDiv,
  FormSubmit,
  FormInput,
  MessagesList,
  AuthorAvatar,
  Message,
  MessageText,
  MessageTime,
  MessageForm,
};
