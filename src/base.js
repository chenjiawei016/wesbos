import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfCdljOXMw29ZUs-kCka9A7vZq1fET7zE",
  authDomain: "catch-of-the-day-f0416.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-f0416.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
