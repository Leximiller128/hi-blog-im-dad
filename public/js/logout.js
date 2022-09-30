// const { response } = require("express");

const logout = async function () {
  //check route here
  const response = await fetch("/controllers/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Logout Failed");
  }
};

document.querySelector("#logout-button").addEventListener("click", logout);
