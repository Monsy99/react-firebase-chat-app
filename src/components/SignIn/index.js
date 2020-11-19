import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import Button from "../Button";

export default ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 
    return (
        <Button txtColor={'white'} bgColor={'blue'} onClick={signInWithGoogle}>Sign in with Google</Button>
    )
}
