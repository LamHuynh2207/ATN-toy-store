const express = require('express');
const router = express.Router();
var authen = require('../models/authenticate');
var getTable = require('../models/tabledisplay');
const { query } = require('express');
const url = require('url')
const deleteAction = require('../models/DeleteFunction')
const addFunction = require('../models/AddFunction')
const editFunction = require('../models/EditAction')


router.get('/',(req,res)=>{
    res.send('respond with a resource');
})

router.post('/', async function(req, res, next) {
    var auth = await authen(req.body.username, req.body.password);
    console.log("Check " + auth);
     if (auth==true) {
         // Target --> display product table for this user
         var tableString = await getTable(req.body.username);
         // console.table(tableString.fields)
         res.render('users', {
         title: "List of products",
         message: "Welcome to ATN shop\n",
         table: tableString
        })
         }
     else {
         res.render('login', { message:"Incorrect Username and/or Password!"})
     }
 });

 router.post('/add', async function(req, res, next) {
    console.log(req.body)
    const queryObject = url.parse(req.url, true).query;
    var user = queryObject['user']
    await addFunction(req.body)
    var tableString = await getTable(user);
    res.render('users', {
        title: "List of products",
        message: "Welcome to ATN shop\n",
        table: tableString
       })

 });
 router.post('/edit', async (req,res,next)=>{
    const queryObject = url.parse(req.url, true).query;
    var id = parseInt(queryObject['id'])
    var user = queryObject['user']
    console.log(req.body)
    await editFunction(id, req.body)
    var tableString = await getTable(user);
    res.render('users', {
        title: "List of products",
        message: "Welcome to ATN shop\n",
        table: tableString
       })
})

 router.get('/delete',async (req,res,next)=>{
    const queryObject = url.parse(req.url, true).query;
    var id = parseInt(queryObject['id'])
    var user = queryObject['user']
    await deleteAction(id)
    var tableString = await getTable(user);
    res.render('users', {
        title: "List of products",
        message: "Welcome to ATN shop\n",
        table: tableString
       })
})

module.exports  = router;