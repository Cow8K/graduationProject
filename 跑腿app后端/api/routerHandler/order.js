const mysql = require('../db/mysql');

// 获取我参与的订单
exports.getMyOrder = (req, resp) => {

    // 接受客户端传过来的学号
    let stuId = req.query.stuId;
    let sql = 'select * from t_order where uId=? or send_uId=?';

    mysql.query(sql, [stuId, stuId], (err, result) => {
        if (err) return console.log(err.message);

        // console.log(result);

        if (result.length == 0) {
            resp.send({
                msg: '暂无订单',
                status: 400,
                orderList: []
            });
        } else {
            resp.send({
                msg: '查询成功',
                status: 200,
                orderList: result,
                stuId
            });
        }

    })

}

// 查看某个订单的详情
exports.orderDetails = (req, resp) => {


    let oId = req.query; // 订单号

    let sql = `select 
	            * from t_order o
            join 
	            (select stuId,name cname,phone from t_certification where stuId=(select send_uId from t_order where oId=` + oId.oId + `)) c
            on 
	            c.stuId=o.send_uId 
            where oId= ` + oId.oId;

    mysql.query(sql, (err, result) => {
        if (err) return console.log(err.message);

        // console.log(result);
        if (result.length == 0)
            return resp.send({ msg: '查无此单', status: 400, orderList: [] });
        else
            resp.send({ msg: '查询成功', status: 200, orderList: result });

    });


}

// 使订单状态变为已完成
exports.finishOrder = (req, resp) => {
    let oId = req.query.oId; // 订单号
    let sql = 'update t_order set recSts="0" where oId=?';
    console.log('finish order executed');

    mysql.query(sql, oId, (err, result) => {
        if (err) return console.log(err.message);

        if (result.changedRows == 1) return resp.send({ msg: 'order finished', status: 200 });
        else resp.send({ msg: 'unfinished', status: 500 });
    })

}

// 取消订单
exports.cancleOrder = (req, resp) => {
    let oId = req.query.oId; // 订单号
    let sql = 'delete from t_order where oId=?';

    mysql.query(sql, oId, (err, result) => {
        if (err) return console.log(err);

        console.log(result);

        if (result.affectedRows == 1) return resp.send({ msg: 'cancel order successed', status: 200 });
        else resp.send({ msg: 'cancel order failed', status: 500 });
    })
}

// 下单
exports.makeOrder = (req, resp) => {
    // 客户端发过来的数据
    let orderInfo = req.query;
    let index = 0;
    let info = [];

    // 对orderInfo对象进行循环，将其属性值循环赋值到info数组
    for (key in orderInfo) {
        info[index] = orderInfo[key]
        index++;
    }

    let sql = `insert into 
                   t_order(uId,type,name,content,time,recSts,send_uId,pay,getAddress,recAddress) 
                values(?,?,?,?,?,'2',' ',?,?,?)`;

    mysql.query(sql, info, (err, result) => {
        if (err) return console.log(err.message);

        if (affectedRows == 1)
            return resp.send({ msg: 'make order succeed', status: 200 });
        else
            return resp.send({ msg: 'make order failed', status: 500 });
    })

}