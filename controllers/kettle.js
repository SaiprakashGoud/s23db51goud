var Kettle = require('../models/kettle');
        // List of all Kettles
        exports.kettle_list = async function(req, res) {
                try{
                theKettle= await Kettle.find();
                res.send(theKettle);
                }
                catch(err){
                res.status(500);
                res.send(`{"Error is ": ${err}}`);
                }
            };

        // for a specific Kettle.
        exports.kettle_detail = async function(req, res) {
            console.log("detail" + req.params.id)
            try {
            result = await Kettle.findById( req.params.id)
            res.send(result)
            }
            catch (err) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
            }
           };
        // Handle Kettle create on POST.
        exports.kettle_create_post = async function(req, res) {
            console.log(req.body)
            let document = new Kettle();
            document.kettle_name = req.body.kettle_name;
            document.quantity = req.body.quantity;
            document.resistance = req.body.resistance;
            try{
            let result = await document.save();
            res.send(result);
            }
            catch(err){
            res.status(500);
            res.send(`{"error is ": ${err}}`);
            }
           };
        // Handle Kettle delete form on DELETE.
        exports.kettle_delete = async function(req, res) {
            console.log("delete " + req.params.id)
            try {
            result = await Kettle.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
            }
            catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
            }
        };
        // Handle Kettle update form on PUT.
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
