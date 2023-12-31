const router = require('express').Router(); 
const userRoutes = require('./users-routes'); 
const projectRoutes = require('./projectRoutes'); 

router.use('/user', userRoutes); 
router.use('/projects', projectRoutes); 

module.exports = router; 

