import { Redirect, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./userSlice";
import RoomPage from "./components/RoomPage";
import firebase from "firebase/app";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const auth = firebase ? firebase.auth() : null;
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const storeUser = useSelector(selectUser);
  console.log(firebase.auth())

  useEffect(() => {
    if (!storeUser && user) {
      const uid = user.uid;
      const photoURL = user.photoURL;
      const displayName = user.displayName;
      const userInfo = { uid, photoURL, displayName };
      dispatch(setUser({ userInfo }));
    }
  });

  return (
    <>
      <Route path="/">
        <Redirect to="/room/general" />
      </Route>
      <Route path={`/room/:roomRef`}>
        <Navigation/>
        <RoomPage firebase={firebase}></RoomPage>
      </Route>
      <Route path="/login">
        <LoginPage auth={auth}></LoginPage>
      </Route>
    </>
  );
}

export default App;
