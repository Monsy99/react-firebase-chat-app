import { Room } from "./styled";

const generateChatroom = (chatroom, currentUserId) => {
  //checking if a chatroom should be displayed
  // user needs to be a member or the chat should be public
  if (
    (chatroom.members &&
      chatroom.members.some((item) => item === currentUserId)) ||
    !chatroom.private
  ) {
    return (
      <Room to={`/room/${chatroom.ref}`} key={`${chatroom.ref}`}>
        {chatroom.title}
      </Room>
    );
  }
  return null;
};
export default generateChatroom;
