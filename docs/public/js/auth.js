

const signUpForm = document.querySelector("#sign-up-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signUpForm["sign-up-email"].value;
  const password = signUpForm["sign-up-password"].value;

  // Authenticate the User
  auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      signUpForm.reset();
    });
});

auth.onAuthStateChanged((user) => {
  if (user) {
      console.log("signin");
      window.location.href="index.html";
      loginCheck(user);
      re
      }else {
        console.log("signout");
        loginCheck(user);
      }
}); 

const signInForm = document.querySelector("#sign-in-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["sign-in-email"].value;
  const password = signInForm["sign-in-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
     signInForm.reset();
  });
});



  

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








