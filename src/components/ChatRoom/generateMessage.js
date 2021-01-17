import {
  AuthorAvatar,
  Message,
  MessageAuthorName,
  MessageText,
  MessageTime,
} from "./styled";

const generateMessage = (message, currentUser) => {
  const isAuthor = message.uid === currentUser.uid;
  let name;
  name = message.authorName ? message.authorName : null;
  console.log(name);
  return (
    <Message isAuthor={isAuthor} key={`${message.id}${message.uid}`}>
      <AuthorAvatar
        isAuthor={isAuthor}
        alt={"avatar"}
        src={message.photoURL}
      ></AuthorAvatar>

      <MessageText isAuthor={isAuthor}>
        <MessageAuthorName>{name}</MessageAuthorName>
        {message.text}
      </MessageText>
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
