const express = require('express');
const router = express.Router();

const orderHandler = require('../routerHandler/order');

router.get('/makeOrder', orderHandler.makeOrder); //下订单

router.get('/myOrder', orderHandler.getMyOrder); // 获取我的订单
router.get('/orderDetails', orderHandler.orderDetails); //获取某个订单的详情
router.get('/finishOrder', orderHandler.finishOrder); //完成订单
router.get('/cancleOrder', orderHandler.cancleOrder); //取消订单

module.exports = router;