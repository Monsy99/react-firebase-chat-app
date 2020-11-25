import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom"
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";


firebase.initializeApp({
  apiKey: "AIzaSyDWBkQjdvZjHIpip9Z1bm9IpDmzc1XxQmM",
  authDomain: "react-firebase-chat-app-505e9.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-app-505e9.firebaseio.com",
  projectId: "react-firebase-chat-app-505e9",
  storageBucket: "react-firebase-chat-app-505e9.appspot.com",
  messagingSenderId: "56873190707",
  appId: "1:56873190707:web:ae292904dd7bcdb7542a46",
  measurementId: "G-NKK3HT6H63"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <main>
        {user ? <SignOut auth={auth}></SignOut> : <SignIn auth={auth}></SignIn>}
      </main>
      {user ? <ChatRoom firebase={firebase} firestore={firestore} auth={auth}/> : ""}
    </div>
  );
}

export default App;
