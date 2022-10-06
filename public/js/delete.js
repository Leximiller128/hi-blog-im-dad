const postId = document.querySelector('input[name="post-id"]').value;

const deleteClickHandler = async function() {
  await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/');
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);