//start with const sucka, and event.preventDefault
const loginHandler = async (event) => {
  event.preventDefault();

  //collect the stuff from login form
  const emailAddress = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trime();
};

if (email && password) {
    //make sure the below route is correct
  const response = await fetch("/controllers/api/user-routes.js", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
}
