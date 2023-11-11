var Kettle = require('../models/kettle');
// List of all kettles
exports.kettle_list = async function(req, res) {
    try{
    theKettle= await Kettle.find();
    res.send(theKettle);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific kettle.
exports.kettle_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Kettle.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle kettle delete on DELETE.
exports.kettle_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Kettle.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err)  {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle kettle update form on PUT.
exports.kettle_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Kettle.findById( req.params.id)
    // Do updates of properties 
    if(req.body.kettle_name) 
    toUpdate.kettle_name = req.body.kettle_name;
    if(req.body.quantity) toUpdate.quantity = req.body.quantity;
    if(req.body.resistance) toUpdate.resistance = req.body.resistance;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
   };
// Handle a show all view
exports.kettle_view_all_Page = async function(req, res) {
    try{
    theKettles = await Kettle.find();
    res.render('kettle', { title: 'Kettle Search Results', results: theKettles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Costume create on POST
    exports.kettle_create_post = async function(req, res) {
        console.log(req.body)
        let document = new Kettle();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"costume_type":"goat", "cost":12, "size":"large"}
        document.kettle_name = req.body.kettle_name;
        document.quantity = req.body.quantity;
        document.resistance = req.body.resistance;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
// Handle a show one view with id specified by query
exports.kettle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Kettle.findById( req.query.id)
    res.render('kettledetail',
   { title: 'Kettle Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a kettle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.kettle_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('kettlecreate', { title: 'Kettle Create'});
    }
    catch(err){
    res.status(500) 
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a kettle.
// query provides the id
exports.kettle_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Kettle.findById(req.query.id)
    res.render('kettleupdate', { title: 'Kettle Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.kettle_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Kettle.findById(req.query.id)
    res.render('kettledelete', { title: 'Kettle Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };