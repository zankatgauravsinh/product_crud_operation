var express = require('express');
var router = express.Router();

var productController = require('../controller/product');
var usersController = require('../controller/user');

router.post('/login', usersController.login);
router.post('/register', usersController.register);
router.get('/listUser', usersController.list);
router.delete('/deleteUser/:userId', usersController.delete);
router.get('/user/:userId', usersController.getUser);
router.put('/update', usersController.update);

router.post('/addProduct', productController.add);
router.get('/listProduct', productController.list);
router.delete('/deleteProduct/:productId', productController.delete);
router.get('/getProduct/:productId', productController.getProduct);
router.put('/updateProduct', productController.update);

module.exports = router;
