const OwnerFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#pname').value.trim();
  const lastName = document.querySelector('#nname').value.trim();
  const bio = document.querySelector('#species').value.trim();
  const firstName = document.querySelector('#breed').value.trim();
  const lastName = document.querySelector('#bdate').value.trim();
  const bio = document.querySelector('#weight').value.trim();
  const firstName = document.querySelector('#').value.trim();
  const lastName = document.querySelector('#bdate').value.trim();
  const bio = document.querySelector('#weight').value.trim();

  if (petName && species) {
    console.log('made it');
    const response = await fetch(`/api/pet`, {
      method: 'POST',
      body: JSON.stringify({
        petName,
        nickname,
        species,
        breed,
        birthdate,
        weight,
        allergies,
        food,
        microchipId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create pet profile');
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
