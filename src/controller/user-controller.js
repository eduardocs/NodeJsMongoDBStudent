'use strict'

var USERS = [
    { 'id': 1, 'username': 'brunohauck', 'password': '123456' },
    { 'id': 2, 'username': 'eddie', 'password': '123456' },
];

function getUsers() {
    return USERS;
}

exports.get = async(req, res, next) => {
    console.log('>> Acesso o controller');
    res.send(getUsers());
};