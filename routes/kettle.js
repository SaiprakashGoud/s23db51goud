var express = require('express');
const kettle_controlers= require('../controllers/kettle');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET Kettles. */
router.get('/', kettle_controlers.kettle_view_all_Page ); 
/* GET detail kettle page */
router.get('/detail', kettle_controlers.kettle_view_one_Page);
/* GET create kettle page */
router.get('/create',secured, kettle_controlers.kettle_create_Page); 
/* GET update kettle page */
router.get('/update',secured, kettle_controlers.kettle_update_Page);
/* GET delete kettle page */
router.get('/delete',secured, kettle_controlers.kettle_delete_Page);

router.get('/:id',kettle_controlers.kettle_detail);
router.get('/:id', kettle_controlers.kettle_update_put);
module.exports = router;