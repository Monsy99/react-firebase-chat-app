import { useCollectionData } from "react-firebase-hooks/firestore";

const useChatroomMessagesInfo = ({ firebase, roomRef = null }) => {
  const firestore = firebase.firestore();
  const chatroomsRef = firestore.collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;

  return { chatrooms, messages, currentRoom, messagesRef };
};
export default useChatroomMessagesInfo;
