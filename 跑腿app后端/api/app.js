const express = require('express');
const certify = require('./router/cetifiyRouter')
const order = require('./router/orderRouter');
const square = require('./router/squareRouter');

const app = express();

app.use('/', certify);
app.use('/order', order);
app.use('/square', square);

app.listen('80', () => {
    console.log('server is running')
})