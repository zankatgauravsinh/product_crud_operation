const express = require('express');
const Product = require('../models/product_model')


exports.add = function(req, res) {
    var product = new Product(req.body);
    console.log('register', req.body);
    product.save()
    .then(product => {
      console.log('add success')
      res.status(200).json({
        'product': 'product added successfully'
      });
    })
    .catch(err => {
      console.log('err ==', err);
      res.status(400).send("unable to save to database");
    });

}


exports.list = function(req, res) {
    Product.find()
    .then(product => {
        if (product) {
            res.status(200).json({
                product: product
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
    Product.deleteOne({_id: req.params.productId})
    .then(() => {
        res.status(200).json({
            message: 'product deleted'
            });
    })
    .catch(err => {
      res.status(400).send({message:err});
    });
}

exports.getProduct = function(req, res) {
    Product.findOne({_id: req.params.productId})
    .then(product => {
        if (product) {
            res.status(200).json({
                product: product
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
    Product.updateOne({_id: req.body.id}, req.body)
    .then(() => {
        res.status(200).json({
            message: 'product updated'
            });
    })
    .catch(err => {
      console.log('err ==', err);
      res.status(400).send(err);
    });
}