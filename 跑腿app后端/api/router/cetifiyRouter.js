const express = require('express')
const router = express.Router();

// 导入学生认证模块并使用
const certifyHandler = require('../routerHandler/certification');

router.get('/certification', certifyHandler.certify); // 将学生信息添加到数据库
router.get('/judge', certifyHandler.judge); // 判断学生是否进行身份认证


module.exports = router;