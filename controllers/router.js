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

router.post('/play', (req, res)=>{
    let newEntry = {
    word_1: req.body.word_1,
    word_2: req.body.word_2,
    word_3: req.body.word_3,
    word_4: req.body.word_4,
    word_5: req.body.word_5,
    word_6: req.body.word_6,
    word_7: req.body.word_7,
    word_8: req.body.word_8,
    word_9: req.body.word_9,
    word_10: req.body.word_10,
    word_11: req.body.word_11,
    word_12: req.body.word_12,
    word_13: req.body.word_13
    }
    
    Models.entries.create(newEntry).then((entries)=>{
       //THIS SHOWS ENTRIES DATA
      // res.json(entries);

        //res.render("./partials/madlib")

        //THIS SHOWS MADLIB DATA
        Models.libs.findOne({
            where: {
                id: 1
            }
          }).then((data)=>{
            res.json(data); 



            //    var madlib = [];
        //  madlib.push(data.word_1);
        //  var words =[];
        //     words.push(entries.phrase_1);
        //     console.log(madlib,words);
           // res.render("./partials/registrationForm")
           
          });
    });
        
    
});




module.exports = router;