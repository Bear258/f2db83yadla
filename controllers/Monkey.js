var Monkey = require('../models/Monkey');
// List of all Costumes
exports.Monkey_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Monkey list');
};
// for a specific Costume.
exports.Monkey_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Monkey detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Monkey_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Monkey create POST');
};
// Handle Costume delete form on DELETE.
exports.Monkey_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Monkey delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Monkey_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Monkey update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Monkey_list = async function(req, res) {
    try{
    theMonkey = await Monkey.find();
    res.send(theMonkey);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Monkey_view_all_Page = async function(req, res) {
    try{
    theMonkey = await Monkey.find();
    res.render('Monkey', { title: 'Monkey Search Results', results: theMonkey });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Monkey_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Monkey();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Monkey_name = req.body.Monkey_name;
    document.Monkey_gender = req.body.Monkey_gender;
    document.Monkey_age = req.body.Monkey_age;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}