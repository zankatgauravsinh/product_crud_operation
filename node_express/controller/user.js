const express = require('express');
const User = require('../models/user_model')


exports.register = function(req, res) {
    var user = new User(req.body);
    console.log('register', req.body);
    user.save()
    .then(user => {
      console.log('add success')
      res.status(200).json({
        'user': 'user added successfully'
      });
    })
    .catch(err => {
      console.log('err ==', err);
      res.status(400).send("unable to save to database");
    });

}

exports.login = function(req, res) {
    console.log('login ===', req.body);
    User.findOne({email:req.body.email,password:req.body.password})
    .then(user => {
        if (user) {
            console.log(' success', user)
            res.status(200).json({
              message: 'User loggin successfully',
              user:user
            });            
        } else {
            res.status(400).send({
                message: "user account is not available on this email"
            });            
        }
    })
    .catch(err => {
      console.log('err ==', err);
      res.status(400).json({
          'message': err});
    });

}

exports.list = function(req, res) {
    User.find()
    .then(user => {
        if (user) {
            res.status(200).json({
                user: user
              });      
        } else {
            res.status(200).json({
                message: 'EMpty data'
              });  
        } 
    })
    .catch(err => {
      res.status(400).send({message:err});
    });
}

exports.delete = function(req,res) {
    User.deleteOne({_id: req.params.userId})
    .then(() => {
        res.status(200).json({
            message: 'User deleted'
            });
    })
    .catch(err => {
      res.status(400).send({message:err});
    });
}

exports.getUser = function(req, res) {
    User.findOne({_id: req.params.userId})
    .then(user => {
        if (user) {
            res.status(200).json({
                user: user
            });            
        } else {
            res.status(400).send({
                message: "server error"
            });            
        }
    })
    .catch(err => {
        res.status(400).json({
            'message': err});
    });    
}

exports.update = function(req,res) {
    User.updateOne({_id: req.body.id}, req.body)
    .then(() => {
        res.status(200).json({
            message: 'User updated'
            });
    })
    .catch(err => {
      console.log('err ==', err);
      res.status(400).send(err);
    });
}