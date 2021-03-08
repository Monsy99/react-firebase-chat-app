import { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

const useChatroomMessagesInfo = ({ firebase, roomRef, dummy }) => {
  const firestore = firebase.firestore();
  const chatroomsRef = firestore.collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;

  useEffect(() => {
    if (!!dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, dummy]);
  return { chatrooms, messages, currentRoom, messagesRef };
};
export default useChatroomMessagesInfo;
