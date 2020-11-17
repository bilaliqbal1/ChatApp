import  firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyANCf9CNMUNeRQSTj0TMAg90i7FOJFxm54",
    authDomain: "chap-app-95aff.firebaseapp.com",
    databaseURL: "https://chap-app-95aff.firebaseio.com",
    projectId: "chap-app-95aff",
    storageBucket: "chap-app-95aff.appspot.com",
    messagingSenderId: "291818000377",
    appId: "1:291818000377:web:10d8c9e85d345d45ea3728"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase