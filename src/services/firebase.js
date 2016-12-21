import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDfvqsCRcOlmwnPHH5QDN933DGnsCwmT88",
  authDomain: "ulike-25d9c.firebaseapp.com",
  databaseURL: "https://ulike-25d9c.firebaseio.com",
  storageBucket: "ulike-25d9c.appspot.com",
  messagingSenderId: "392764699487"
};

firebase.initializeApp(config);

export default firebase;