const router = require('express').Router();
const { User, Owner } = require('../models');
//const withAuth = require('../utils/auth');

//Find out if user is logged in, then set up an owner profile if none exists. Then send to homepage.

router.get('/', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    console.log(loggedIn);
    if (loggedIn) {
      console.log('here');
      let user = await User.findByPk(req.session.user_id, {
        include: [Owner],
      });

      if (user.owner.id === null) {
<<<<<<< HEAD
=======

>>>>>>> 032306aaa0bb876b6fca1b8eeed4b463a9176940
        res.render('ownerForm');
        return;
      } else {
        res.render('homepage');
      }
    } else {
      res.render('login', {});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
