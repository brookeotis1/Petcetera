const router = require('express').Router();
const { User, Owner } = require('../models');

//const withAuth = require('../utils/auth');

//Find out if user is logged in, then set up an owner profile if none exists. Then send to homepage.Ye
router.get('/', async (req, res) => {
  try {
    console.log(req.body);

    const loggedIn = req.session.loggedIn;
    if (loggedIn) {
      console.log('here');

      let user = await User.findByPk(req.session.user_id, {
        include: [Owner],
      });

      console.log(req.session);
      console.log(user);
      //const ownerId = req.body.owner_id;
      if (user.owner === null) {
        res.render('ownerForm');
      } else {
        res.render('homepage', {
          //Pass the logged in flag to the template
          loggedIn: req.session.loggedIn,
        });
      }
    } else {
      //console.log(req.session);
      res.render('login', {});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/ownerProfile', async (req, res) => {
//   try {
//     // const dbOwnerProfile = await Owner.findByPk
//     console.log(req.session);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('/user/:id', async (req, res) => {
//   try {
//     const dbUserData = await Owner.findByPk(req.params.id, {});
//     const user = dbUserData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'gallery' template
//     res.render('ownerProfile', { user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
