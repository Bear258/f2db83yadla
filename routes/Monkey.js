var express = require('express');
var router = express.Router();

const Monkey_controllers= require('../controllers/Monkey');

/* GET home page. */
router.get('/',Monkey_controllers.Monkey_view_all_Page );
router.get('/detail', Monkey_controllers.Monkey_view_one_Page);
router.get('/create', Monkey_controllers.Monkey_create_Page);
router.get('/update', Monkey_controllers.Monkey_update_Page);
router.get('/delete', Monkey_controllers.Monkey_delete_Page);

module.exports = router;
// GET request for one costume.
