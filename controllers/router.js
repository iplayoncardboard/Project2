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
   
  

    Models.user.findAll({
        where: {
            user_name: req.body.user_name
        }
      }).then((data)=>{
        if(data.length === 0){


            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                if(err){
                    console.log(err);
                }
                // Store hash in your password DB.
                let newUser = {
                    user_name: req.body.user_name,
                    pw_hash: hash
                }
                Models.user.create(newUser).then((user)=>{
                    res.json(user);
                });
            });
          


           
        }
        else {
            console.log("ERROR USER EXISTS")
        }
      });
});





router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;