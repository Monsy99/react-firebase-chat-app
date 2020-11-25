import React from "react";
import 'firebase/auth';
import Button from "../Button"

const SignOut = ({auth}) => {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign out</Button>
    )
}
export default SignOut;