const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
router.get('/pet', (req, res) => {
  res.render('petForm');
});
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
