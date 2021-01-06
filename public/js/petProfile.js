const PetFormHandler = async (event) => {
  event.preventDefault();


  
  const petName = document.querySelector('#name').value.trim();
  const nickname = document.querySelector('#nickname').value.trim();
  const species = document.querySelector('#species').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const birthdate = document.querySelector('#birthdate').value.trim();
  const microchipID = document.querySelector('#microchipId').value.trim();
  // const lastName = document.querySelector('#bdate').value.trim();
  // const bio = document.querySelector('#weight').value.trim();

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
        microchipId,
        // weight,
        // allergies,
        // food,
        
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

// document
//   .querySelector('.petProfile-form')
//   .addEventListener('submit', petFormHandler);

// // document
// //   .querySelector('.ownerProfile-list')
// //   .addEventListener('click', delButtonHandler);
