//start with const sucka, and event.preventDefault
const loginHandler = async (event) => {
  event.preventDefault();

  //collect the stuff from login form
  const emailAddress = document
    .querySelector("#exampleInputEmail1")
    .value.trim();
  const password = document
    .querySelector("#exampleInputPassword1")
    .value.trime();

  //make sure the below route is correct
  const response = await fetch("/controllers/api/user-routes.js", {
    method: "POST",
    body: JSON.stringify({
      email: emailAddress.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("./profile.js");
  } else {
    alert("That isn't it!");
  }
};

//sign up block: should it have its own page?
const signupHandler = async (event) => {
  event.preventDefault();

  // const name = document.querySelector("#username-input-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  //is below path correct?
  const response = await fetch("/controllers/api/user-routes.js", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/public/js/profile.js");
  } else {
    alert(response.statusText);
  }
};

//query selctors
document.querySelector("login-form").addEventListener("submit", loginHandler);

document.querySelector("signup-form").addEventListener("submit", signupHandler);
