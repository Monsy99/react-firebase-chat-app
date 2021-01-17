import firebase from "firebase/app";
import { Redirect, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./userSlice";
import RoomPage from "./components/RoomPage";
import { useEffect } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyDWBkQjdvZjHIpip9Z1bm9IpDmzc1XxQmM",
  authDomain: "react-firebase-chat-app-505e9.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-app-505e9.firebaseio.com",
  projectId: "react-firebase-chat-app-505e9",
  storageBucket: "react-firebase-chat-app-505e9.appspot.com",
  messagingSenderId: "56873190707",
  appId: "1:56873190707:web:ae292904dd7bcdb7542a46",
  measurementId: "G-NKK3HT6H63",
});

function App() {
  const auth = firebase ? firebase.auth() : null;
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const storeUser = useSelector(selectUser);
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
        <Redirect to="/room/general" firebase={firebase}></Redirect>
      </Route>
      <Route path={`/room/:roomRef`}>
        <Navigation firebase={firebase}></Navigation>
        <RoomPage firebase={firebase}></RoomPage>
      </Route>
      <Route path="/login">
        <LoginPage auth={auth}></LoginPage>
      </Route>
    </>
  );
}

export default App;
