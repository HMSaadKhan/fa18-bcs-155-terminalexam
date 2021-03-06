var express = require('express');
var router = express.Router();
var {MatchModel}= require("../../models/MatchModal");
var validateProduct= require("../../middlewares/validateProducts");
var auth= require("../../middlewares/auth");


//get match
router.get("/", async(req, res)=>{
    console.log(req.user);
    let data = await MatchModel.find();
    return res.send(data)
 })
 //update
 router.put("/:id", async(req, res)=>{
     try {
      let data = await MatchModel.findById(req.params.id);
      data.City = req.body.City;
      data.Date = req.body.Date;
      data.TeamA = req.body.TeamA;
      data.TeamA = req.body.TeamA;
      await data.save();
      if(!data)
       return res.status(400).send("Match not found");
      return res.send(data)  
     } catch (error) {
         return res.status(400).send("Invalid ID");
         
     } 
  })
 
 //delte
 router.delete("/:id", async(req, res)=>{
     try {
      let data = await MatchModel.findByIdAndDelete(req.params.id); 
      if(!data)
       return res.status(400).send("Match not found");
      return res.send(data)  
     } catch (error) {
         return res.status(400).send("Invalid ID");
         
     } 
  })
 //insert
 router.put("/", async(req, res)=>{
      let data = new MatchModel();
      data.City = req.body.City;
      data.Date = req.body.Date;
      data.TeamA = req.body.TeamA;
      data.TeamB = req.body.TeamB;
      await data.save();      
      return res.send(data)  
     
  })
 
 
 
 module.exports = router;
 
