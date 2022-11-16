var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Monkey', { title: 'Search Results Monkey' });
// });
var express = require('express');
const Monkey_controlers= require('../controllers/Monkey');
var router = express.Router();
/* GET costumes */
router.get('/', Monkey_controlers.Monkey_view_all_Page );
router.get('/detail', Monkey_controlers.Monkey_view_one_Page);
router.get('/create', Monkey_controlers.Monkey_create_Page);

module.exports = router;
// GET request for one costume.
