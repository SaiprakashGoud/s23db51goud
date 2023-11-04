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
exports.kettle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kettle detail: ' + req.params.id);
};
// Handle kettle create on POST.
exports.kettle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: kettle create POST');
};
// Handle kettle delete form on DELETE.
exports.kettle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kettle delete DELETE ' + req.params.id);
};
// Handle kettle update form on PUT.
exports.kettle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kettle update PUT' + req.params.id);
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
