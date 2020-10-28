// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJCjDZwUSQDHVWPjUCmRim_BD3NtWMzeo",
    authDomain: "vicflo-web.firebaseapp.com",
    databaseURL: "https://vicflo-web.firebaseio.com",
    projectId: "vicflo-web",
    storageBucket: "vicflo-web.appspot.com",
    messagingSenderId: "909526137925",
    appId: "1:909526137925:web:b5b63ba763c3e64186772c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();

  //Update FireStore settings
  db.settings({ timestampsInSnapshots: true })