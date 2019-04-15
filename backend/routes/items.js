const express = require('express');
const router = express.Router();
const dbService = require('./../dbService/dbService');
const fs = require('file-system');


let db = null;

router.use(async (req,res,next)=>{
    db = new dbService();
    await db.initDB("ShoppingCart");
    next();
})

router.get('/', async function(req,res,next){
    const items = await db.getAll("items");
    for(let item of items){
        const imgBase64 = fs.readFileSync(item.img, 'utf8');
        item.img = imgBase64;
    }
    res.send(items);
})

module.exports = router;
