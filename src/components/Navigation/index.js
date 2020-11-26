import React from "react";
import { NavBar, Logo } from "./styled.js";
import SignOut from "../SignOut";
import SignIn from "../SignIn";

const Navigation = ({auth}) => {
    return(
        <NavBar>
            <Logo>Chat App</Logo>
            {auth.currentUser ? <SignOut auth={auth}/> : <SignIn auth={auth}/>}
        </NavBar>
    );
}

export default Navigation;