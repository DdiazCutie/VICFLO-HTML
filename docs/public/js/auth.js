const emailSignUp = document.getElementById('sign-up-email');
const passwordSignUp = document.getElementById('sign-up-paswword');

const emailSignIn = document.getElementById('sign-in-email');
const passwordSignIn = document.getElementById('sign-in-password');

const signUpForm = document.querySelector("#sign-up-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
      checkInputsSignUp();
      auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      signUpForm.reset();
    });
});

const signInForm = document.querySelector("#sign-in-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
    checkInputsSignIn();
     auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
     signInForm.reset();
      });
});

auth.onAuthStateChanged((user) => {
  if (user) {
      console.log("signin");
      window.location.href="index.html";
      loginCheck(user);
      }else {
        console.log("signout");
        loginCheck(user);
      }
}); 



function checkInputsSignUp(){
  const emailValue = emailSignUp.value.trim();
  const passwordValue = passwordSignUp.value.trim();

  if(emailValue === ''){
    setErrorFor(emailSignUp, 'El email no puede estar vacio');
  }else if(!isEmail(emailSignUp)){
    setErrorFor(emailSignUp, 'Correo no valido');
  }else{
    setSuccessFor(emailSignUp)
  }
}

function checkInputsSignIn(){
  const emailValue = emailSignIn.value.trim();
  const passwordValue = passwordSignIn.value.trim();
}

function setErrorFor(input, message){
  const inputField = input.parentElement;
  const small = inputField.querySelector('small');

  small.innerText = message;

  inputField.className = 'input-field error';
  small.innerText = message;
}

function setSuccessFor(input) {
	const inputField = input.parentElement;
	inputField.className = 'input-field success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Login with Google
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
});

// Login with Facebook
const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', e => {
  e.preventDefault();
  signInForm.reset();

  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("facebook sign in");
  })
  .catch(err => {
    console.log(err);
  })

})

