import ChatRoom from "./components/ChatRoom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Navigation from "./components/Navigation";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const userBaseRef = db.collection("users");
  const [userList] = useCollectionData(userBaseRef);

  console.log(user);
  console.log(userList);

  const isInBase =
    user && userList && userList.some(({ id }) => user.uid === id);
  if (user && db && userList && !isInBase) {
    db.collection("users").doc(user.uid.toString()).set({
      id: user.uid,
      name: user.displayName,
      permissions: "default",
      registrationDate: new Date().toString(),
      photoURL: user.photoURL,
    });
  }

  return (
    <div className="App">
      <Navigation auth={auth}></Navigation>
      {user && isInBase ? (
        <ChatRoom firebase={firebase} db={db} auth={auth} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
