const { query } = require('express');
const express = require('express');
const router  = express.Router();
var authen = require('../models/authenticate');
var getTable = require('../models/tabledisplay');

//login page
router.get('/', (req,res)=>{
    res.render('login', { message:"Please input your credential!"});
})

module.exports = router; 


