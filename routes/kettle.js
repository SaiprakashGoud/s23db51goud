var express = require('express');
const kettle_controlers= require('../controllers/kettle');
var router = express.Router();

/* GET Kettles. */
router.get('/', kettle_controlers.kettle_view_all_Page);
module.exports = router;
