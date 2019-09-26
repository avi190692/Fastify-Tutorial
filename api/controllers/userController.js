const {getUsers} = require('../adaptors/userAdaptor');
const User = require('../models/User');
const nconf = require('nconf');
const { SignUpResponse } = require('../models/SignUpResponse');

const getUsersCtrl = async (req, reply) => {
    try{
        const {page} = req.query;
        const users = [] ;
        debugger
        const us = User.find();
        JSON.stringify(us, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (users.indexOf(value) !== -1) {
                   return;
                }
                users.push(value);
            }
        });
        reply.send(users); 
        cache = null; // Enable garbage collection
        
        //const users = await getUsers({page});
        
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const registerUserCtrl = async(req, reply) => {
    try{
        const {email, password} = req.body;
        const user = new User({
            email,
            password
        });
        const newUser = await user.save();
        const { id, email: userEmail } = newUser;
        const res = new SignUpResponse({ id, email });
        reply.send(res);
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getUsersCtrl,
    registerUserCtrl
}