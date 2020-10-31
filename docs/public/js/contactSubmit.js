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

var messagesRef = firebase.database().ref('messages')

document.getElementById('contact_form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var nombresCompletos = getInputValue('contact_nombre');
    var DNI_RUC = getInputValue('contact_DNI_RUC');
    var asunto = getInputValue('contact_asunto');
    var mensaje = getInputValue('contact_mensaje');

    saveMessage(nombresCompletos, DNI_RUC, asunto, mensaje);

    document.querySelector('.alert_form_contact').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert_form_contact').style.display = 'none';
    },3000);

    document.getElementById('contact_form').reset();

}

function getInputValue(id){
    return document.getElementById(id).value;
}

function saveMessage(nombresCompletos, DNI_RUC, asunto, mensaje){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        nombresCompletos: nombresCompletos,
        DNI_RUC: DNI_RUC,
        asunto: asunto,
        mensaje: mensaje
    })
}