import { AuthorAvatar, Message, MessageText, MessageTime } from "./styled";

const generateMessage = (message, currentUser) => {
  const isAuthor = message.uid === currentUser.uid;
  return (
    <Message isAuthor={isAuthor} key={`${message.id}${message.uid}`}>
      <AuthorAvatar alt={"avatar"} src={message.photoURL}></AuthorAvatar>
      <MessageText isAuthor={isAuthor}>{message.text}</MessageText>
      <MessageTime>
        {message.createdAt
          ? `${new Date(message.createdAt.seconds * 1000).toLocaleTimeString()}
                     ${new Date(
                       message.createdAt.seconds * 1000
                     ).toLocaleDateString()}`
          : ``}
      </MessageTime>
    </Message>
  );
};
export default generateMessage;
//function that generates a message and displays it depending on whether the currentUser is author
