var Kettle = require('../models/kettle');
// List of all kettles
exports.kettle_list = function(req, res) {
res.send('NOT IMPLEMENTED: kettle list');
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
