const PetFormHandler = async (event) => {
  event.preventDefault();
  alert(event);

  const petName = document.querySelector('#pname').value.trim();
  const nickName = document.querySelector('#nname').value.trim();
  const species = document.querySelector('#species').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const birthdate = document.querySelector('#bdate').value.trim();
  const weight = document.querySelector('#weight').value.trim();

alert("petname=" + petName);
alert("nickname=" + nickName);
alert("species=" + species);
alert("breed=" + breed);
alert("birthdate=" + birthdate);
alert("weight=" + weight);

document.getElementById("submitPetForm").submit();



}
  

//   if (petName && species) {
//     console.log('made it');
//     const response = await fetch(`/api/pet`, {
//       method: 'POST',
//       body: JSON.stringify({
//         petName,
//         nickName,
//         species,
//         breed,
//         birthdate,
//         weight,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response);

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to create pet profile');
//     }
//   }
// };

// // const delButtonHandler = async (event) => {
// //   if (event.target.hasAttribute('data-id')) {
// //     const id = event.target.getAttribute('data-id');

// //     const response = await fetch(`/api/ownerProfile/${id}`, {
// //       method: 'DELETE',
// //     });

// //     if (response.ok) {
// //       document.location.replace('/profile');
// //     } else {
// //       alert('Failed to delete project');
// //     }
// //   }
// // };

document
  .querySelector('.petProfile-form')
  .addEventListener('submitPetForm', petFormHandler);

// // // document
// // //   .querySelector('.ownerProfile-list')
// // //   .addEventListener('click', delButtonHandler);
