const express = require('express');
const router = express.Router();

const squareHandler = require('../routerHandler/square');

router.get('/orders', squareHandler.orders);
router.get('/accept', squareHandler.acceptOrder);


module.exports = router;