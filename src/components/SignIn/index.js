import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

export default ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
