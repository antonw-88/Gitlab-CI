var express = require('express')
var router = express.Router()
const controller = require('../controllers/homeController')

/* GET home page. */
router.get('/', controller.get)

module.exports = router
