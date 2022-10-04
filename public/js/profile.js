// {{!-- wait until after MVP --}}
const profileposts = async (event) => {
    //event.preventDefault();
  
    //make sure the below route is correct
    const response = await fetch("/dashboard/profile", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    
    console.log(response);

    if (response.ok) {
      document.location.replace("/dashboard/profile");
    } else {
      alert("something went wrong");
    }
};
document.querySelector("#profile").addEventListener("click", profileposts);
