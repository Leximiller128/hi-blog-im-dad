//sign up block: should it have its own page?
console.log("help")
const signupHandler = async function(event) {
  event.preventDefault();
  console.log("i hav been clicked")

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
    document.location.replace('/dashboard/profile');
  } else {
    console.log("failed to sign up")
    alert(response.statusText);
  }
};

document.querySelector("#signup-form").addEventListener("submit", signupHandler);
