import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  AuthorAvatar,
  FormSubmit,
  FormInput,
  Message,
  MessageForm,
  MessagesList,
  MessageText,
  MessageTime,
  RelativeDiv,
} from "./styled";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

const ChatRoom = ({ firebase }) => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const { roomRef } = useParams();
  const chatroomsRef = firestore.collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;

  // ----------------------------------------------------

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
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    if (input.trim() !== "") {
      await messagesRef.add({
        text: input,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
      setInput("");
    }
    if (!!dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const dummy = useRef();
  const currentUserId = auth.currentUser ? auth.currentUser.uid : null;
  return (
    auth && (
      <RelativeDiv>
        <h1>Room: {currentRoom ? currentRoom.title : ""}</h1>
        <MessagesList>
          {messages &&
            messages.map((message) => (
              <Message
                isAuthor={message.uid === currentUserId}
                key={nanoid()}
                className={message.id}
              >
                <AuthorAvatar
                  alt={"avatar"}
                  src={message.photoURL}
                ></AuthorAvatar>
                <MessageText>{message.text}</MessageText>
                <MessageTime>
                  {message.createdAt
                    ? `${new Date(
                        message.createdAt.seconds * 1000
                      ).toLocaleTimeString()}
                     ${new Date(
                       message.createdAt.seconds * 1000
                     ).toLocaleDateString()}`
                    : ``}
                </MessageTime>
              </Message>
            ))}
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
