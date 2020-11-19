import React from "react";
import 'firebase/auth';

export default ({auth}) => {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign out</button>
    )
}