const generateInitialMessage = (currentRoom) => {
  return {
    text: `Hello ! This is a beginning of the #${
      currentRoom && currentRoom.title
    } channel`,
  };
};
export default generateInitialMessage;
//function that generates a message for an empty chatRoom
