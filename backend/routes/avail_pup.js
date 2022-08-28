const express = require('express');
const { BadRequestError } = require("../expressError");
const AvailPup = require("../models/avail_pup");

const router = express.Router();

router.get('/', async function(req, res, next){
    try{
        const pup = await AvailPup.displayAvailPup();
        return res.json({pup})
    }catch(err){return next(err)}
})

module.exports = router;