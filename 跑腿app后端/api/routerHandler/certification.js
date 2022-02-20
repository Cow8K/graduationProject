const mysql = require('../db/mysql');

// 进行身份认证将学生信息添加到数据库
exports.certify = (req, resp) => {
    let userData = req.query;

    let sql = 'insert into t_certification set ?';

    mysql.query(sql, userData, (err, result) => {
        if (err) {
            resp.send({ msg: 'fail', status: 500 });
            return console.log(err.message);
        }

        if (result.affectedRows == 1) {
            // console.log("success\n", result)
            resp.send({ msg: 'success', status: 200 });
        } else {
            // console.log("fail\n", result)
            resp.send({ msg: 'fail', status: 400 });
        }


    })
}

// 判断是否进行了身份认证
exports.judge = (req, resp) => {
    let sql = 'select count(1) result,stuId from t_certification where name="刘盛" ';

    mysql.query(sql, (err, result) => {
        if (err) {
            resp.send({ msg: 'fail', status: 500 });
            return console.log(err.message);
        }

        // console.log(result[0].result)

        if (result[0].result == 1) {
            resp.send({ msg: '已认证', status: 200, stuId: result[0].stuId });
        } else {
            resp.send({ msg: '未认证', status: 400 });
        }

        // console.log(result);
    })
}