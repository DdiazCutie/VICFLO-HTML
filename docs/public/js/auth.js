const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};



const signUpForm = document.querySelector("#sign-up-form");
signUpForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const email = signUpForm["sign-up-email"].value;
  const password = signUpPassword["sign-up-password"].value;

    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      signUpForm.reset();
      
    })
})








