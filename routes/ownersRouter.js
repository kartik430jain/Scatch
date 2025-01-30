const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model")

router.get("/",function(req,res){
    res.send("hey it's Working");
});

//  console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === "development"){

    router.post("/create",function(req,res){
        res.send("hey it's Working");
    });
}



module.exports = router;