const router = require('express').Router();
const { User } = require('../models');
//const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['name', 'ASC']],
    });

    //   const users = userData.get({ plain: true });

    res.render('homepage', {
      //...users,
      //Pass the logged in flag to the template
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
