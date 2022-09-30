//start with const sucka, and event.preventDefault
console.log("hello")
const loginHandler = async (event) => {
  event.preventDefault();

  //collect the stuff from login form
  const emailAddress = document
    .querySelector("#exampleInputEmail1")
    .value.trim();
  const password = document
    .querySelector("#exampleInputPassword1")
    .value.trim();

  //make sure the below route is correct
  const response = await fetch("/login-routes/", {
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
document.querySelector("#submit").addEventListener("submit", loginHandler);
