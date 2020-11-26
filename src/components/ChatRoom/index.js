import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthorAvatar, FormSubmit, FormInput, Message, MessageForm, MessagesList, MessageText, MessageTime, Wrapper } from "./styled";
import { nanoid } from "nanoid";

const ChatRoom = ({ firebase, firestore, auth }) => {
    const messagesRef = firestore.collection('messages');
    const getMessagesByTime = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(getMessagesByTime);

    const [input,setInput] = useState('');
    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    useEffect(() => {
    },[messages])
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        if(input.trim() !== "")
        {await messagesRef.add(
            {
                text: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
            }
        )
        setInput('');
        }
        if(!!dummy.current){
        dummy.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const dummy = useRef();
    const currentUserId = auth.currentUser.uid;
    return (
        <Wrapper>
            <MessagesList>
                { messages && messages.map( message => <Message isAuthor={message.uid === currentUserId} key={nanoid()} className={message.id}>
                <AuthorAvatar alt={"avatar"} src={message.photoURL}></AuthorAvatar>
                <MessageText>
                {message.text}
                </MessageText>
                <MessageTime>
                    {message.createdAt ? `${new Date(message.createdAt.seconds * 1000).toLocaleTimeString()}
                     ${new Date(message.createdAt.seconds * 1000).toLocaleDateString()}` : ``}
                </MessageTime>
                </Message>) }
                <div ref={dummy}></div>
            </MessagesList>
            <MessageForm onSubmit={onFormSubmit}>
                <FormInput placeholder={"Write a message here"} value={input} onChange={onInputChange}/>
                <FormSubmit>⬆️</FormSubmit>
            </MessageForm>
        </Wrapper>
    );
}
export default ChatRoom;