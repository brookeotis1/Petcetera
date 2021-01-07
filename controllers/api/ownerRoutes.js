const router = require('express').Router();
const { Owner } = require('../../models');
const { response } = require('express');
//const withAuth = require('../../utils/auth');

//updates owner profile
router.post('/', async (req, res) => {
  console.log('ownerRoutes');
  try {
    const ownerdb = await Owner.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      user_id: req.session.user_id,
    });

    res.render('homepage');
    res.status(200).json(ownerdb);
  } catch (err) {
    res.status(400).json(err);
  }
});

// // GET one owner
// router.get('/owner/:id', async (req, res) => {
//   console.log('line 21');
//   try {
//     const dbOwnerData = await Owner.findByPk(req.params.id);

//     const owner = dbOwnerData.get({ plain: true });

//     res.render('homepage', { owner, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //delete owner

// router.delete('/:id', async (req, res) => {
//   try {
//     const ownerData = await Owner.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!ownerData) {
//       res.status(404).json({ message: 'No owner found with this id!' });
//       return;
//     }

//     res.status(200).json(ownerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
