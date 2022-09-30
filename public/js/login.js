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
  const response = await fetch("/controllers/dashboard-routes.js", {
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

//query selctors
document.querySelector("login-form").addEventListener("submit", loginHandler);
