const express = require('express')
const router = express.Router()

// home
router.get('/', function(req, res, next) {
	res.render('v1_home')
})

module.exports = router
