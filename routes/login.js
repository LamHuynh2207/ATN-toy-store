const { query } = require('express');
const express = require('express');
const router  = express.Router();
var authen = require('../models/authenticate');

//login page
router.get('/', (req,res)=>{
    res.render('login', { message:"Please input your credential!"});
})

router.post('/', async function(req, res, next) {
   var auth = await authen(req.body.username, req.body.password);
   console.log("Check " + auth);
    if (auth==true) {
       res.render('users', {
        title: "User page",
        message: "Welcome to ATN"
       })
        }
    else {
        res.render('login', { message:"Incorrect Username and/or Password!"})
    }
});
   



module.exports = router; 