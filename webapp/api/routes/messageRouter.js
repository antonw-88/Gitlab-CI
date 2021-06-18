var express = require('express');
var router = express.Router();
const controller = require('../controllers/messageController')

/* GET users listing. */
router.get('/', controller.get);

module.exports = router;
