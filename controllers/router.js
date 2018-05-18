const express = require("express");
const Models = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
    
});

router.post('/register', (req, res)=>{
//Looks for a duplicate username
    Models.user.findAll({
        where: {
            user_name: req.body.user_name
        }
      }).then((data)=>{
          //if duplicate username is not found 
        if(data.length === 0){
            //has and salt password
            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                if(err){
                    console.log(err);
                }
                // Store username and hash in your password DB.
                let newUser = {
                    user_name: req.body.user_name,
                    pw_hash: hash
                }
                Models.user.create(newUser).then((user)=>{
                    res.redirect('/login')
                });
            });
        }
        else {
            console.log("ERROR USER EXISTS")
        }
      });
});

router.get('/login',(req,res)=>{
    res.render('./partials/login');
});

router.post('/login',(req,res)=>{
    lookup = {
        user_name: req.body.user_name,
        pw_hash: req.body.password
    }

    Models.user.findOne({
        where: {
            user_name: req.body.user_name
        }
      }).then((data)=>{
      
          if(!data){
              console.log("No User Found");
          }
          else{  bcrypt.compare(req.body.password, data.pw_hash, (err, res) =>{
            // res == true
            console.log("PASSWORD MATCH: "+ res)
        });
        }
      });


});

router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;