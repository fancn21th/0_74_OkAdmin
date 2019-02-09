const express = require('express')
const router = express.Router()

// home
router
	.get('/', function(req, res, next) {
		res.render('v1_home')
	})
	.get('/products', function(req, res, next) {
		res.render('v1_products')
	})

module.exports = router
