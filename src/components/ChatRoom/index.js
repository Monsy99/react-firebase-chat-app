import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
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

const ChatRoom = ({ firebase }) => {
  const storeUser = useSelector(selectUser);
  const firestore = firebase.firestore();
  const { roomRef } = useParams();
  const chatroomsRef = firestore.collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;
  const initialMessage = generateInitialMessage(currentRoom);
  const dummy = useRef();
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (!!dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const onFormSubmit = async (e) => {
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
    if (!!dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    storeUser && (
      <RelativeDiv>
        <Header># {currentRoom ? currentRoom.title : ""}</Header>
        <MessagesList>
          {messages && !!messages.length ? (
            messages.map((message) => generateMessage(message, storeUser))
          ) : (
            <Message isAuthor={false}>
              <MessageText>{initialMessage.text}</MessageText>
            </Message>
          )}
          <div ref={dummy}></div>
        </MessagesList>
        <MessageForm onSubmit={onFormSubmit}>
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
