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