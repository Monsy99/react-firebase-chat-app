import { nanoid } from "nanoid";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../userSlice";
import { Container, Room, Header, ChatroomsContainer } from "./styled";

const Menu = ({ firestore, db }) => {
  const storeUser = useSelector(selectUser);
  const { roomRef } = useParams();
  const chatroomsRef = firestore.collection("chatrooms");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const [titleInput, setTitleInput] = useState("");
  const [membersInput, setMembersInput] = useState("");

  const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;
  const currentUserId = storeUser ? storeUser.uid : null;

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
      <Header>Chatrooms:</Header>
      <ChatroomsContainer>
        {chatrooms
          ? chatrooms.map((chatroom) => {
              if (
                chatroom.members
                  ? chatroom.members.some((item) => item === currentUserId) ||
                    !chatroom.private
                  : false
              ) {
                return (
                  <Room to={`/room/${chatroom.ref}`} key={`${chatroom.ref}`}>
                    {chatroom.title}
                  </Room>
                );
              }
              return null;
            })
          : ""}
      </ChatroomsContainer>
    </Container>
  );
};
export default Menu;
