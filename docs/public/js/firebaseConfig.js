var firebaseConfig = {
    apiKey: "AIzaSyAJCjDZwUSQDHVWPjUCmRim_BD3NtWMzeo",
    authDomain: "vicflo-web.firebaseapp.com",
    databaseURL: "https://vicflo-web.firebaseio.com",
    projectId: "vicflo-web",
    storageBucket: "vicflo-web.appspot.com",
    messagingSenderId: "909526137925",
    appId: "1:909526137925:web:b5b63ba763c3e64186772c"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const firestore = firebase.firestore();


  