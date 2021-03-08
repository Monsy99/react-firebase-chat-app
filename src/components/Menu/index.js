import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../userSlice";
import generateChatroom from "./generateChatroom";
import { Container, Header, ChatroomsContainer } from "./styled";
import useChatroomMessagesInfo from "../../utils/useChatroomMessagesInfo";

const Menu = ({ firebase }) => {
  const storeUser = useSelector(selectUser);
  const { roomRef } = useParams();
  const { chatrooms, chatroomsRef, currentRoom } = useChatroomMessagesInfo({
    firebase: firebase,
    roomRef: roomRef,
  });
  const [titleInput, setTitleInput] = useState("");
  const onTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };
  const currentUserId = storeUser ? storeUser.uid : null;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const ref = nanoid();
    const members = [currentUserId];
    try {
      if (titleInput.trim() !== "") {
        chatroomsRef.doc(ref).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
          ? chatrooms.map((chatroom) =>
              generateChatroom(chatroom, currentUserId)
            )
          : ""}
      </ChatroomsContainer>
    </Container>
  );
};
export default Menu;
