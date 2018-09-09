const express    = require("express"),
      app        = express(),
      mongoose   = require("mongoose"),
      seedDB     = require("./seedDb.js"),
      jwt = require("jsonwebtoken"),
      bodyParser = require("body-parser");
      
      //Profile    = require("./models/Profile.js"),
      //Team       = require("./models/Team.js");

// parse application/json
app.use(bodyParser.json());
//app.use(methodOverride('_method'));
const apiRoute = require("./routes/api");  

//seedDB();
app.use("/api/profile", apiRoute);


app.post("/login", (req, res) => {
    jwt.sign({ foo: 'bar' }, 'secret word', (err, token) => {
        res.json({
           token: token 
        });
    }); 
});
      
mongoose.connect("mongodb://localhost:27017/restul_Mongo",{ useNewUrlParser: true });      
//router     = express.Router    

app.get("/", (req, res) => {
res.send("Welcome to the App");
});



app.listen(process.env.PORT, process.env.IP, function(){
       console.log("The app is up an running"); 
});
      
      