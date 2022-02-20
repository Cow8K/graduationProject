const express = require('express');
const mysql = require('./db/mysql')

let server = express();

server.get('/certification', (req, resp) => {
    console.log(req.query)
    let sql = 'select * from t_certification';

    mysql.query(sql, (err, result) => {
        if (err) return err.message;
        // console.log(result[0])
        // data = result;

        resp.send([{ msg: 'success', status: 200 }, result]);
    })



})

server.listen('80', () => {
    console.log('server started')
})