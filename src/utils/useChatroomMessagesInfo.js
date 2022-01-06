import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

const useChatroomMessagesInfo = ({  roomRef = null }) => {
  const firestore = firebase.firestore();
  const chatroomsRef = firestore.collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;

  return { chatrooms, messages, currentRoom, messagesRef, chatroomsRef };
};
export default useChatroomMessagesInfo;
