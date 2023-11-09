var express = require('express');
const kettle_controlers= require('../controllers/kettle');
var router = express.Router();

/* GET Kettles. */
router.get('/', kettle_controlers.kettle_view_all_Page );
/* GET detail kettle page */
router.get('/detail', kettle_controlers.kettle_view_one_Page);
/* GET create kettle page */
router.get('/create', kettle_controlers.kettle_create_Page);
/* GET update kettle page */
router.get('/update', kettle_controlers.kettle_update_Page);
/* GET delete kettle page */
router.get('/delete', kettle_controlers.kettle_delete_Page);

router.get('/costumes/:id',kettle_controlers.kettle_detail);
module.exports = router;