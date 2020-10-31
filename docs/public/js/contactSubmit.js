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

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact_form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('contact_nombre');
  var document = getInputVal('contact_DNI_RUC');
  var affair = getInputVal('contact_asunto');
  var message = getInputVal('contact_mensaje');

  // Save message
  saveMessage(name, document, affair, message);


  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, document, affair, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    document:document,
    affair:affair,
    message:message
  });
}
