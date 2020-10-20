const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var HELLO = [
    { 'msg': 'Hello Express' },
];

function getHello() {
    return HELLO;
}

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send(getHello());
});

const userRouter = require('./src/routes/user-route')
app.use('/user', userRouter);

app.listen(4000, function() {
    console.log('Hello Express Listen on Port 4000');
});
