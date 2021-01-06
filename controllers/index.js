const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
router.get('/pet', (req, res) => {
  console.log('PET ROUTE FORM');
  res.render('petForm');
});
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
