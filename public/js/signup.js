//sign up block: should it have its own page?
const signupHandler = async (event) => {
  event.preventDefault();

  // const name = document.querySelector("#username-input-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  //is below path correct?
  const response = await fetch("/controllers/home-routes.js", {
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

document.querySelector("signup-form").addEventListener("submit", signupHandler);
