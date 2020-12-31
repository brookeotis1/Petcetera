const newFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#owner-firstName').value.trim();
  const lastName = document.querySelector('#owner-lastName').value.trim();
  const bio = document.querySelector('#owner-bio').value.trim();

  if (firstName && lastName && bio) {
    const response = await fetch(`/api/owner`, {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, bio }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/ownerProfile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/ownerProfile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-owner-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.new-owner-list')
  .addEventListener('click', delButtonHandler);
