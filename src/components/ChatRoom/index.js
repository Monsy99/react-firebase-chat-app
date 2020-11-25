import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";


const ChatRoom = ({ firebase, firestore, auth }) => {
    const messagesRef = firestore.collection('messages');
    const getMessagesByTime = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(getMessagesByTime);

    const [input,setInput] = useState('');
    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add(
            {
                text: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
            }
        )
        setInput('');
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }
    const dummy = useRef();

    return (
        <div>
            <ul>
                { messages && messages.map( message => <li className={message.id}>
                <img alt={"avatar"} src={message.photoURL}></img>
                {message.text}
                </li>) }
                <div ref={dummy}></div>
            </ul>
            <form onSubmit={onFormSubmit}>
                <input value={input} onChange={onInputChange}>
                </input>
                <button>Send</button>
            </form>
        </div>
    );
}
export default ChatRoom;