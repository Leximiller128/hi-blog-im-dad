//sign up block: should it have its own page?
const signupHandler = async function(event) {
  event.preventDefault();

  // const name = document.querySelector("#username-input-signup").value.trim();
  const name = document.querySelector("#name")
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-input-signup");

  const response = await fetch('/api/users', {
    method: "POST",
    body: JSON.stringify({
      username: name.value,
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#signup-form").addEventListener("submit", signupHandler);
