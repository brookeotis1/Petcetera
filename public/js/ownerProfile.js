const OwnerFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-owner').value.trim();
  const lastName = document.querySelector('#lastName-owner').value.trim();
  const bio = document.querySelector('#bio-owner').value.trim();

  if (firstName && lastName && bio) {
    console.log('made it');
    const response = await fetch(`/api/owner`, {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, bio }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create My Owner Profile');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/ownerProfile/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.ownerProfile-form')
  .addEventListener('submit', OwnerFormHandler);

// // document
// //   .querySelector('.ownerProfile-list')
// //   .addEventListener('click', delButtonHandler);
