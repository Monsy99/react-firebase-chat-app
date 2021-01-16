import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { resetUser } from "../../userSlice";

const SignIn = ({ auth }) => {
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    dispatch(resetUser());
    auth.signInWithPopup(provider);
  };
  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
};
export default SignIn;
