const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  if (title === '' || body === '') {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("myModal").style.display = "block"
    document.getElementById("myModal").classList.add("show")
    
  } else {
    console.log("hello")
    
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    document.location.replace('/');
  }
};

function closeModal() {
  document.getElementById("backdrop").style.display = "none"
  document.getElementById("myModal").style.display = "none"
  document.getElementById("myModal").classList.remove("show")
  document.location.replace('/dashboard/new');
}
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  closeModal()
}
}
document
  .querySelector('#new-post-form')
  .addEventListener('click', newFormHandler);
