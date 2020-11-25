import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import Button from "../Button";

const SignIn = ({auth}) => {
    console.log("rendered sign in button");
    const signInWithGoogle = () => {
        console.log("sign in popup");
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    } 
    return (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    )
}
export default SignIn;