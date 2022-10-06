//start with const sucka, and event.preventDefault
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

  let picTimer = 3;
  if (response.ok) {
    const main = document.querySelector('#mainA');
    main.classList.add("hidden");
      const timedImg = document.querySelector('#imageLoader')
      timedImg.classList.remove("hidden")
      const flexer = document.querySelector('#icon')
      flexer.classList.remove("hidden");
      
      timer = setInterval(() => {
      picTimer--;
      if (picTimer <= 0) {
        main.classList.remove("hidden");
        timedImg.classList.add("hidden");
        flexer.classList.add("hidden");
        document.location.replace('/');
        clearInterval(timer);
      }
    }, 1000);
  } else {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("myModal").style.display = "block"
    document.getElementById("myModal").classList.add("show")
  }
};

function closeModal() {
  document.getElementById("backdrop").style.display = "none"
  document.getElementById("myModal").style.display = "none"
  document.getElementById("myModal").classList.remove("show")
  document.location.replace('/');
}
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  closeModal()
}
}
//query selctors
document.querySelector("#login-form").addEventListener("submit", loginHandler);
