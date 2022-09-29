//start with const sucka, and event.preventDefault
const loginHandler = async (event) => {
  event.preventDefault();

  //collect the stuff from login form
  const emailAddress = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trime();

  if (email && password) {
    //make sure the below route is correct
    const response = await fetch("/controllers/api/user-routes.js", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("./profile.js");
    } else {
      alert(response.statusText);
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    //is below path correct?
    const response = await fetch("/controllers/api/user-routes.js", {
      method: "POST",
      body: JSON.stringify({ name, email, passrod }),
      headers: { "Content-Type": "application/json" },
    });
  }
};

document.querySelector("login-form").addEventListener("submit", loginHandler);
