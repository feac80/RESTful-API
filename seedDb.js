const Profile = require("./models/Profile");

const data =[
         {
             firstName:"Frank",
             lastName :"Araque",
             age      :41,
             team     :"Barcelona",
             position :"Neutral" 
         },
         {
             firstName:"Jose",
             lastName :"None",
             age      :45,
             team     :"Real Madrid",
             position :"Neutral" 
         },
           {
             firstName:"Maria",
             lastName :"Araque",
             age      :41,
             team     :"Teneife",
             position :"Neutral" 
         },
         {
             firstName:"Klaus",
             lastName :"Araque",
             age      :44,
             team     :"GC",
             position :"None" 
         }
    
    ];
    
function seedDB(){
    Profile.deleteMany()
    .then(()=>{
        data.forEach((item)=>{
            Profile.create(item, function (err, createdProfile){
               if (err){
                   console.log(err.mensage);
               }else{
                  // console.log("Added :" + createdProfile ); 
               } 
            });
        });
    })
    .catch(err =>{
       console.log(err.message); 
    });
}
    
    
module.exports = seedDB;
