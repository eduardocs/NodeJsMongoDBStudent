'use strict'

const repository = require('../repository/user-repository');

exports.getAllUsers = async(req, res, next) => {
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (error) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: error
            }
        );
    }
};

exports.addUser = async(req, res, next) => {
    try {
        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturnUser);
    } catch (error) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: error
            }
        );
    }
};


// exports.get = async(req, res, next) => {
//     console.log('>> Acesso o controller');
//     res.send(getUsers());
// };