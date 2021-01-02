import React from "react";
import { NavBar, Logo } from "./styled.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../SignOut";
import SignIn from "../SignIn";

const Navigation = ({ firebase }) => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);
  return (
    <NavBar>
      <Logo>Chat App</Logo>
      {user && !loading ? <SignOut auth={auth} /> : <SignIn auth={auth} />}
    </NavBar>
  );
};

export default Navigation;
