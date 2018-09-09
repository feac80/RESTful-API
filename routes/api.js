const express = require("express"),
      router  = express.Router(),
      jwt = require("jsonwebtoken"),
      methodOverride = require ("method-override"),
      middleware     = require("../middleware"),
      Profile = require("../models/Profile");  

router.use(methodOverride('_method'));

//Index:List all the profiles
router.get("/", middleware.ensureToken , (req, res) => {

  jwt.verify(req.token, 'secret word', function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
        let filter = req.query;
        if (req.query.age != null){
           filter = {age: {$gt: req.query.age}};      
         }
       Profile.find(filter)
           .then(foundProfile =>{
                res.json({
                   cofirmation:"Success",
                   data: foundProfile
               });
           })
           .catch(err => {
               res.json({
                   confirmation:"Failed",
                   data: err.message
               }); 
           });     
     
     
    }
  });


});
// Show an specific profile
router.get("/:id", (req, res)=>{
    
    Profile.findById(req.params.id)
    .then(foundProfile =>{
       res.json({
            confirmation:"Success",
            data: foundProfile
        }); 
    })
    .catch(err =>{
        res.json({
            confirmation:"Fail",
            error: `The profile with id: ${req.params.id} does not exist` 
        }); 
    });
});
//Create a new Profile
router.post("/", (req, res) => {
   Profile.create(req.body) 
    .then(createdProfile => {
      res.json({
        confirmation:"Succes",
        data: createdProfile
        });  

    })
    .catch(err => {
        res.json({
            confirmation:"Fallo",
            data: err.message
        });
    });

    
});
//Update Profile
router.put("/:id", (req, res)=>{
   let query     = req.query,    
       profileId = req.params.id;
   Profile.findByIdAndUpdate(profileId, query, {new:true} )
    .then(updatedProfile =>{
       res.json({
        confirmation:"Update route Success",
        query: updatedProfile
            
         }); 
    })
    .catch(error =>{
        res.json({
            confirmation:"Fail",
            data: req.query
         });
    });
});
//delete
router.delete("/:id", (req,res) => {
    Profile.findByIdAndRemove (req.params.id)
    .then(data => {
       res.json({
           confirmation : "Success",
           data:`The profile id : ${req.params.id} has been removed `
       }); 
    })
    .catch(err => {
        res.json({
           confirmation : "Fail",
           data:`The profile id : ${req.params.id} is not found `
       });    
    });
    
});




module.exports = router; 