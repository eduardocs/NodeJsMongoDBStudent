'use strict'

const mongoose = require('mongoose');
require('../models/product');
const Product = mongoose.model('Product');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await Product.find({ status:true })
;}

exports.create = async(data) => {
    let product = new Product(data);
    return await product.save();
}

exports.update = async(id, data) => {
    return await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            price: data.price,
            description: data.description,
            buyUrl: data.buyUrl,
            status: data.status,
        }
    });
}

exports.delete = async(id, data) => {
    return await Product.findByIdAndDelete({_id: id});
}

exports.deleteLogic = async(id, data) => {
    // console.log('update id', id);
    // console.log('update data', data);
    return await Product.findByIdAndUpdate(id, {
        $set: {
            status: false,
        }
    });
}