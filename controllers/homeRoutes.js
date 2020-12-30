// const router = require('express').Router();
// const { User, Owner } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all owners and JOIN with user data
//     const ownerData = await Owner.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['user.id'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const owners = ownerData.map((project) => owner.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       owners,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/owner/:id', async (req, res) => {
//   try {
//     const projectData = await owner.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const owner = ownerData.get({ plain: true });

//     res.render('owner', {
//       ...owner,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });
// // const router = require('express').Router();
// // const sequelize = require('../config/connection');
// // const withAuth = require('../utils/auth');
// // const { Pet, User, Owner } = require('../models');

// // router.get('/', withAuth, (req, res) => {
// //   Owner.findAll({
// //     where: {
// //       user_id: req.session.user_id,
// //     },

// //     include: [
// //       {
// //         model: Owner,
// //         attributes: ['firstName', 'lastName', 'bio'],
// //         include: {
// //           model: Pet,
// //           attributes: ['petName'],
// //         },
// //       },
// //     ],
// //   })
// //     .then((dbOwnerData) => {
// //       const profile = dbOwnerData.map((owner) => owner.get({ plain: true }));
// //       res.render('homepage', { dbOwnerData, loggedIn: true });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });

// module.exports = router;
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
