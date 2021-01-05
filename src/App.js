import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Default from "./components/Default";
import { HashRouter, Redirect, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import Navigation from "./components/Navigation";

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
  return (
    <HashRouter>
      <Route path={`/:roomRef`}>
        <Navigation firebase={firebase}></Navigation>
        <Default firebase={firebase}></Default>
      </Route>
      <Route path="/" exact>
        <Redirect to="/general" firebase={firebase}></Redirect>
      </Route>
    </HashRouter>
  );
}

export default App;
