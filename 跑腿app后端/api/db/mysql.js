const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'graduation'
});

module.exports = db;