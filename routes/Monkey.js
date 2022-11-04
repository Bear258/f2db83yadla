var express = require('express');
var router = express.Router();

/* GET my home page. */

router.get('/', function (req, res, next) {
    res.render('Monkey', { title: 'Search Results Monkey' });
});

module.exports = router;