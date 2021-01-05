import { nanoid } from "nanoid";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { Container, Room, StyledLink, Title } from "./styled";

const Menu = ({ auth, firestore, db }) => {
  const { roomRef } = useParams();
  const chatroomsRef = firestore.collection("chatrooms");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const [titleInput, setTitleInput] = useState("");
  const [membersInput, setMembersInput] = useState("");

  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;
  const currentUserId = auth.currentUser ? auth.currentUser.uid : null;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const ref = nanoid();
    const members = [currentUserId];
    try {
      if (titleInput.trim() !== "") {
        chatroomsRef.doc(ref).set({
          createdAt: db.firestore.FieldValue.serverTimestamp(),
          title: titleInput,
          creator: currentUserId,
          ref: ref,
          private: false,
          members: members,
        });
        setTitleInput("");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  return (
    <Container>
      <p>Formularz do dodawania czatów do wyrzucenia do popup'u</p>
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="Tytuł czatu"
          value={titleInput}
          onChange={onTitleInputChange}
        ></input>
        <button>Add a new room</button>
      </form>
      <h2>Chatrooms:</h2>
      {chatrooms
        ? chatrooms.map((chatroom) => {
            if (
              chatroom.members.some(
                (item) => item === currentUserId || !chatroom.private
              )
            ) {
              return (
                <StyledLink
                  key={`${chatroom.ref}`}
                  to={`/room/${chatroom.ref}`}
                >
                  <Room key={`${chatroom.ref}`}>
                    <Title>{chatroom.title}</Title>
                  </Room>
                </StyledLink>
              );
            }
            return null;
          })
        : ""}
    </Container>
  );
};
export default Menu;
