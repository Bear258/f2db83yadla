var express = require('express');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

const Monkey_controllers= require('../controllers/Monkey');

/* GET home page. */
router.get('/',Monkey_controllers.Monkey_view_all_Page );
router.get('/detail', Monkey_controllers.Monkey_view_one_Page);
router.get('/create', Monkey_controllers.Monkey_create_Page);
router.get('/update',secured, Monkey_controllers.Monkey_update_Page);
router.get('/delete', Monkey_controllers.Monkey_delete_Page);

module.exports = router;
// GET request for one costume.
