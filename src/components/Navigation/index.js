import React from "react";
import { NavBar, Logo, StyledLink } from "./styled.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../SignOut";
import SignIn from "../SignIn";

const Navigation = ({ firebase }) => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);
  return (
    <NavBar>
      <StyledLink to="/general">
        <Logo>Chat App</Logo>
      </StyledLink>
      {user && !loading ? <SignOut auth={auth} /> : <SignIn auth={auth} />}
    </NavBar>
  );
};

export default Navigation;
