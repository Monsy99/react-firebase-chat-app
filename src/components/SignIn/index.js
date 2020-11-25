import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import Button from "../Button";

const SignIn = ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 
    return (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    )
}
export default SignIn;