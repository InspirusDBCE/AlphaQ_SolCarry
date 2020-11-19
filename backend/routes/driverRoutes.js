const { Router } = require('express');
const driverController = require('../controllers/driverController');

const router = Router();

router
    .post('/signup', driverController.signup_post)
    .post('/login', driverController.login_post);

module.exports = router;

