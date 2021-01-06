const PetFormHandler = async (event) => {
  event.preventDefault();

  const petName = document.querySelector('#petname').value.trim();
  const nickname = document.querySelector('#nickname').value.trim();
  const species = document.querySelector('#species').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const birthdate = document.querySelector('#birthdate').value.trim();
  const microchip = document.querySelector('#microchip').value.trim();

  if (petName && species && breed && birthdate) {
    console.log('made it');
    const response = await fetch(`api/pet`, {
      method: 'POST',
      body: JSON.stringify({
        petname,
        nickname,
        species,
        breed,
        birthdate,
        microchip,
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

document
  .querySelector('.petProfile-form')
  .addEventListener('submit', PetFormHandler);

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
