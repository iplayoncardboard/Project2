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


//CATEGORY API
router.get("/api/categories", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    Models.category.findAll({
     
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  //LIBS API
router.get("/api/libs", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    Models.libs.findAll({
     
    }).then(function(dbLibs) {
      res.json(dbLibs);
    });
  });

//PLAY ROUTE
router.get("/play", (req, res) => {
    res.render("play");
});

router.post('/play', (req, res)=>{
    
    //Pick a Lib Matching the Category Selection
   
   Models.libs.findAll({
    where: {
        category_id: req.body.selectCategory
    }
  }).then((data)=>{
      var madlibOptions = [];
    res.json(data);  //DATA IS AN ARRAY
    for (i=0;i<data.length;i++) {
        madlibOptions.push(data[i].dataValues.id);
    }
    // console.log(madlibOptions);
    var madlib = madlibOptions[Math.floor(Math.random()*madlibOptions.length)]; //THIS PICKS A RANDOM MADLIB FROM THE CATEGORY
    //console.log(madlib);



    //Push Entry Data to Database
    let newEntry = {
    lib_id: madlib,
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
     });
        //res.render("./partials/madlib")

        //THIS SHOWS MADLIB DATA
        // Models.libs.findOne({
        //     where: {
        //         id: 1
        //     }
        //   }).then((data)=>{
        //     res.json(data); 
        //     var phrases =[];
           
        //      console.log(data.dataValues.phrase_1); //THIS LOGS PHASE 1
           
          
        //   console.log(entries.dataValues.word_1); //THIS LOGS WORD 1



           
    //       });
     });
        
    
});




module.exports = router;