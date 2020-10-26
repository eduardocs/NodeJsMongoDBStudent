'use strict'

const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('User');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({ status:true })
;}

exports.create = async(data) => {
    let user = new User(data);
    return await user.save();
}

exports.update = async(id, data) => {
    let userUpdated = await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            eamil: data.email,
            password: data.password,
            status: data.status,
        }
    });
    return await userUpdated;
}

exports.delete = async(id, data) => {
    return await User.findByIdAndDelete({_id: id});
}

exports.deleteLogic = async(id, data) => {
    return await User.findByIdAndUpdate(id, {
        $set: {
            status: false,
        }
    });
}