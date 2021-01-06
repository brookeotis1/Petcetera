const router = require('express').Router();
const { User, Owner } = require('../models');

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

router.get('/homepage', async (req, res) => {
  try {
    res.render('/');
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
