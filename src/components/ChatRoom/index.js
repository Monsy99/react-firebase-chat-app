import React, { useRef, useState } from "react";
import {
  FormSubmit,
  FormInput,
  Message,
  MessageForm,
  MessagesList,
  MessageText,
  RelativeDiv,
  Header,
} from "./styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";
import generateInitialMessage from "./generateInitialMessage";
import generateMessage from "./generateMessage";
import useChatroomMessagesInfo from "../../utils/useChatroomMessagesInfo";

const ChatRoom = ({ firebase }) => {
  const storeUser = useSelector(selectUser);
  const { roomRef } = useParams();
  const dummy = useRef();
  const { messages, currentRoom, messagesRef } = useChatroomMessagesInfo({
    firebase: firebase,
    roomRef: roomRef,
    dummy: dummy,
  });
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onNewMessageSubmit = async (e) => {
    //on the form submit the new message is being pushed to the room you are currently in
    e.preventDefault();
    const { uid, photoURL } = storeUser;
    if (input.trim() !== "") {
      await messagesRef.add({
        text: input,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        authorName: storeUser.displayName,
      });
      setInput("");
    }
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    storeUser && (
      <RelativeDiv>
        <Header># {currentRoom && currentRoom.title}</Header>
        <MessagesList>
          {messages?.length ? (
            messages.map((message) => generateMessage(message, storeUser))
          ) : (
            <Message isAuthor={false}>
              <MessageText>{generateInitialMessage(currentRoom)}</MessageText>
            </Message>
          )}
          <div ref={dummy}></div>
        </MessagesList>
        <MessageForm onSubmit={onNewMessageSubmit}>
          <FormInput
            placeholder={"Write a message here"}
            value={input}
            onChange={onInputChange}
          />
          <FormSubmit>⬆️</FormSubmit>
        </MessageForm>
      </RelativeDiv>
    )
  );
};
export default ChatRoom;
