//start with const sucka, and event.preventDefault
console.log("hello")
const loginHandler = async (event) => {
  event.preventDefault();

  //collect the stuff from login form
  const emailAddress = document
    .querySelector("#inputEmail1")
  const password = document
    .querySelector("#exampleInputPassword1")

  //make sure the below route is correct
  const response = await fetch("api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: emailAddress.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("That isn't it!");
  }
};

//query selctors
document.querySelector("#login-form").addEventListener("submit", loginHandler);
