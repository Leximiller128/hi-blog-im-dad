// const { response } = require("express");

const logout = async function () {
  console.log("ihave been clicked")
  //check route here
  const response = await fetch('/logout', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Logout Failed");
  }
};

document.querySelector("#logout-link").addEventListener("click", logout);
