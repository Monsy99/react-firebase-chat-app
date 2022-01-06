import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./globalStyle";
import theme from "./theme";
import store from "./store";
import { HashRouter } from "react-router-dom";
import firebase from "firebase/app";


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


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
