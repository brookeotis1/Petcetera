const router = require('express').Router();
const { User, Owner } = require('../models');

//const withAuth = require('../utils/auth');

//Find out if user is logged in, then set up an owner profile if none exists. Then send to homepage.Ye
router.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    if (loggedIn) {
      console.log('here');

      let user = await User.findByPk(req.body.user_id, {
        include: [Owner],
      });

      const ownerId = req.body.owner_id;
      console.log(ownerId);
      if (user.owner === null) {
        res.render('ownerForm');
      } else {
        res.render('homepage', {
          //Pass the logged in flag to the template
          //loggedIn: req.session.loggedIn,
          //Pass owner information to homepage
          firstName: user.owner.firstName,
          lastName: user.owner.lastName,
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

router.get('/petForm', async (req, res) => {
  try {
    res.render('petForm');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
