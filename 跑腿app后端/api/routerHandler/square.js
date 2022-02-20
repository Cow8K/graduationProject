const mysql = require('../db/mysql');

// 获取未被接单的订单列表
exports.orders = (req, resp) => {
    let sql = 'select * from t_order where recSts="2"';

    mysql.query(sql, (err, result) => {
        if (err) return err.message;

        if (result.length != 0)
            return resp.send({ msg: 'get order succeed', status: 200, orders: result });
        else
            resp.send({ msg: 'get order failed', status: 500, orders: result })

    })
}

// 接单
exports.acceptOrder = (req, resp) => {
    let oId = req.query.oId;
    let send_uId = req.query.stuId;
    let sql = "update t_order set recSts= '1' , send_uId=? where oId=?";
    // let sql = 'select * from t_order where recSts="2"';


    console.log('accept order executed');

    mysql.query(sql, [send_uId, oId], (err, result) => {
        if (err) return console.log(err);

        console.log(result);

        if (result.changedRows == 1)
            return resp.send({ msg: 'accept order succeed', status: 200 });
        else
            resp.send({ msg: 'accept order failed', status: 500 });

    })

}