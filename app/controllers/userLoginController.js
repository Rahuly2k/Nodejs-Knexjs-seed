var userModel = require('../models/userModel');

var config = require('../../config');

var jwt = require('jsonwebtoken');

var _ = require('underscore');

var bcrypt = require('bcrypt-nodejs');

// ---- login function ----//

module.exports.loginFunction = function(req, res){

    userModel.forge({ email: req.body.email})

    .fetch()
    
    .then(function(user){

        if(user){
            
           if(bcrypt.compareSync(req.body.password, user.attributes.password)){

            var token = jwt.sign(_.omit(user.attributes, 'password'), config.secretKey);      

            res.json({
                
                type: user.attributes.type, status:200, token: token

            });
           }
           else{

            res.status(401).send({ error: 'Incorrect email or password' }); 
           }

        }else{
            res.status(401).send({ error: 'Incorrect email or password' });;
        }
    })
};

// ---- register user function with password bcryption ----//

module.exports.registerUser = function(req, res, next){

    userModel.forge({ email: req.body.email})
    
    .fetch()

    .then(function(user){
        
        if(user){         

            res.json({

                type: false,

                error: 'It looks like you have already registered using this email'
            });
        }else{

            bcrypt.hash(req.body.password, null, null, function(err, hash) {

                // Store hash in your password DB.

                req.body.password = hash;

                userModel.forge(req.body)

                .save()

                .then(function(addedUser){

                    res.json(addedUser);
                })
            });
        }
    })
    .catch(function(err){

        console.log(err.stack);

        res.status(400).json({error: err.message});
    });
};
