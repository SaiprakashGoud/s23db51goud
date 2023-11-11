var express = require('express');
const kettle_controlers= require('../controllers/kettle');
var router = express.Router();

/* GET Kettles. */
router.get('/', kettle_controlers.kettle_view_all_Page ); 
/* GET detail kettle page */
router.get('/detail', kettle_controlers.kettle_view_one_Page);
/* GET create kettle page */
router.get('/create', kettle_controlers.kettle_create_Page); 


router.get('/:id',kettle_controlers.kettle_detail);
router.get('/:id', kettle_controlers.kettle_update_put);
module.exports = router;