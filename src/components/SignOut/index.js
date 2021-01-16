import React from "react";
import "firebase/auth";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { resetUser } from "../../userSlice";

const SignOut = ({ auth }) => {
  const dispatch = useDispatch();
  return (
    auth.currentUser && (
      <Button
        onClick={() => {
          auth.signOut();
          setTimeout(() => {
            dispatch(resetUser());
          }, 1000);
          // the setTimeout is here so that the signOut can complete before reseting the user
          // otherwise the google auth is still signed in and triggers setting user
        }}
      >
        Sign out
      </Button>
    )
  );
};
export default SignOut;
