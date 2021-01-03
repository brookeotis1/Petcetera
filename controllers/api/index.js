const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const ownerRoutes = require('./ownerRoutes');

router.use('/users', userRoutes);
router.use('/pet', petRoutes);
router.use('/api/owner', ownerRoutes);

module.exports = router;
