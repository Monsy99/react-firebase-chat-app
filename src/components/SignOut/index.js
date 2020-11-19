import React from "react";
import 'firebase/auth';
import Button from "../Button"

export default ({auth}) => {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign out</Button>
    )
}