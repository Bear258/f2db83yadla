var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Monkey', { title: 'Search Results Monkey' });
});
var express = require('express');
const Monkey_controlers= require('../controllers/Monkey');
var router = express.Router();
/* GET costumes */
router.get('/', Monkey_controlers.Monkey_view_all_Page );
module.exports = router;