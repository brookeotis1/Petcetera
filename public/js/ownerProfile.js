const OwnerFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const zip = document.querySelector('#zip').value.trim();
  const bio = document.querySelector('#bio').value.trim();

  if (firstName && lastName && phone && zip && bio) {
    console.log('made it');
    const response = await fetch(`/api/owner`, {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, phone, zip, bio }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/ownerProfile');
    } else {
      alert('Failed to create My Owner Profile');
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
  .querySelector('.ownerProfile-form')
  .addEventListener('submit', OwnerFormHandler);

// document
//   .querySelector('.ownerProfile-list')
//   .addEventListener('click', delButtonHandler);
