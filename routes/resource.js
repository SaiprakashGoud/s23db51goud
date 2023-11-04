var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kettle_controller = require('../controllers/kettle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Kettle ROUTES ///
// POST request for creating a Kettle.
router.post('/kettles', kettle_controller.kettle_create_post);
// DELETE request to delete Kettle.
router.delete('/kettles/:id', kettle_controller.kettle_delete);
// PUT request to update Kettle.
router.put('/kettles/:id', kettle_controller.kettle_update_put);
// GET request for one Kettle.
router.get('/kettles/:id', kettle_controller.kettle_detail);
// GET request for list of all Kettle items.
router.get('/kettles', kettle_controller.kettle_list);
module.exports = router;