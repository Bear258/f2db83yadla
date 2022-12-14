var Monkey = require('../models/Monkey'); 
 
// List of all Monkey 
exports.Monkey_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey list'); 
}; 

// List of all Monkey
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
 
// // for a specific Monkey. 
exports.Monkey_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey detail: ' + req.params.id); 
}; 
// for a specific Monkey. 
exports.Monkey_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Monkey.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all Monkey
exports.Monkey_detail = async function(req, res) { 
    try{ 
        theMonkey = await Monkey.find(); 
        res.send(theMonkey); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Monkey create on POST. 
exports.Monkey_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey create POST'); 
}; 
 
// List of all Monkey
exports.Monkey_create_post = async function(req, res) { 
    try{ 
        theMonkey = await Monkey.find(); 
        res.send(theMonkey); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Monkey delete form on DELETE. 
exports.Monkey_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey delete DELETE ' + req.params.id); 
}; 
// Handle Monkey delete on DELETE. 
exports.Monkey_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Monkey.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all Monkey 
// exports.Monkey_delete = async function(req, res) { 
//     try{ 
//         theMonkey = await Monkey.find(); 
//         res.send(theMonkey); 
//     } 
//     catch(err){ 

//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 
 




// Handle Monkey update form on PUT. 
// exports.Monkey_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: Monkey update PUT' + req.params.id); 
// }; 

// List of all Monkey 
// exports.Monkey_update_put = async function(req, res) { 
//     try{ 
//         theMonkey = await Monkey.find(); 
//         res.send(theMonkey); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle Monkey update form on PUT. 
exports.Monkey_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Monkey.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.item)toUpdate.item = req.body.item; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a Monkey. 
// query provides the id 
exports.Monkey_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Monkey.findById(req.query.id) 
        res.render('Monkeyupdate', { title: 'Monkey Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Monkey_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Monkey.findById(req.query.id) 
        res.render('Monkeydelete', { title: 'Monkey Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a Monkey. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Monkey_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Monkeycreate', { title: 'Monkey Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.Monkey_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Monkey.findById( req.query.id) 
        res.render('Monkeydetail',  
{ title: 'Monkey Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
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

// Handle Monkey create on POST. 
exports.Monkey_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Monkey(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Monkey_type":"goat", "cost":12, "size":"large"} 
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
}; 
