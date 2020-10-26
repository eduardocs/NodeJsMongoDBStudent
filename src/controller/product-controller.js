'use strict'

const repository = require('../repository/product-repository');

exports.getAllProducts = async(req, res, next) => {
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

exports.addProduct = async(req, res, next) => {
    try {
        let dbReturn = await repository.create(req.body);
        res.status(200).send(dbReturn);
    } catch (error) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: error
            }
        );
    }
};

exports.editProduct = async(req, res, next) => {
    try {
        let result = await repository.update(req.query.id, req.body);
        res.status(202).send(result);   
    } catch (error) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: error
            }
        );
    }
};

exports.deleteProduct = async(req, res, next) => {
    // console.log('deleteProduct', req);
    try {
        await repository.deleteLogic(req.query.id);
        res.status(200).send({
            message: 'Product delete!',
        });
    } catch (error) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: error
            }
        );
    }
};
