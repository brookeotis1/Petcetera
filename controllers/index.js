const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
router.get('/login', (req, res) => {
  console.log('index-login');
  res.render('login');
});

router.get('/pet', (req, res) => {
  console.log('index=pet');
  res.render('petForm');
});

router.get('/homepage', (req, res) => {
  console.log('index-home');
  res.render('homepage');
});

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
