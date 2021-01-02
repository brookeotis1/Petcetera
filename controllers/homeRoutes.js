const router = require('express').Router();
const { User } = require('../models');
//const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    console.log(loggedIn);
    if (loggedIn) {
      res.render('homepage', {
        //Pass the logged in flag to the template
        loggedIn: req.session.loggedIn,
      });
    } else {
      console.log(req.session);
      res.render('login', {});
    }
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

router.get('/owner/:id', async (req, res) => {
  try {
    const dbOwnerData = await Owner.findByPk(req.params.id, {
      include: [
        {
          model: Owner,
          attributes: ['id', 'firstName', 'lastName', 'bio'],
        },
      ],
    });
    const owner = dbOwnerData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('profile', { profile, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
