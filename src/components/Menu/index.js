import { nanoid } from "nanoid";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { Container, Room, StyledLink } from "./styled";

const Menu = ({ auth, firestore, db }) => {
  const { roomRef } = useParams();
  const chatroomsRef = firestore.collection("chatrooms");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const [messages] = useCollectionData(
    chatroomsRef.doc(roomRef).collection("messages")
  );
  const [input, setInput] = useState("");

  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  console.log(messages);

  const addMessage = async () => {
    await messagesRef.add({ value: "siemka" });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const ref = nanoid();
    try {
      if (input.trim() !== "") {
        chatroomsRef.doc(ref).set({
          createdAt: db.firestore.FieldValue.serverTimestamp(),
          title: input,
          creator: auth.currentUser.uid,
          ref: ref,
          private: false,
          messages: [],
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const logStatus = () => {
    console.log("chatrooms: ", chatrooms);
    console.log("user:", auth.X);
    console.log("parameters:", roomRef);
    console.log("current room:", currentRoom);
  };

  return (
    <Container>
      <p>Formularz do dodawania czatów do wyrzucenia do popup'u</p>
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="Tytuł czatu"
          value={input}
          onChange={onInputChange}
        ></input>
        <button>submit</button>
      </form>
      <button onClick={logStatus}>Log status</button>
      <button onClick={addMessage}>Siemka Button</button>
      {chatrooms
        ? chatrooms.map((chatroom) => (
            <Room key={`${chatroom.ref}`}>
              <StyledLink to={`/${chatroom.ref}`}>
                <header>{chatroom.title}</header>
              </StyledLink>
            </Room>
          ))
        : ""}
    </Container>
  );
};
export default Menu;
