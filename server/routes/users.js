var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('用户首页')
})

module.exports = router;