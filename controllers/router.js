const express = require("express");
const Models = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router();
const passport = require('passport');
const bodyParser = require("body-parser");


router.get("/", (req, res) => {
    res.render("index");
    console.log(req.user);
    console.log(req.isAuthenticated());
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
    console.log(req.user);
    console.log(req.isAuthenticated());
});

router.post('/register', (req, res)=>{
    Models.user.findAll({
        where: {
            user_name:req.body.user_name
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
                    Models.user.findOne({
                        where: {
                            user_name: newUser.user_name
                        }
                      }).then((data)=>{
                          console.log("this is the login data: "+ JSON.stringify(data));
                          req.login(data.user_name,(err)=>{
                              if(err) throw err;

                              res.redirect('/');
                          })
                      });
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
router.get("/api/libs",authenticationMiddleware(), function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    Models.libs.findAll({
     
    }).then(function(dbLibs) {
      res.json(dbLibs);
    });
  });

//PLAY ROUTE
router.get("/play", authenticationMiddleware(),(req, res) => {
    res.render("play");
});


var finalMadlib = [];

router.post('/play', authenticationMiddleware(),(req, res)=>{
    //Pick a Lib Matching the Category Selection
   Models.libs.findAll({
    where: {
        category_id: req.body.selectCategory
    }
  }).then((data)=>{
      var madlibOptions = [];
    //res.json(data);  //DATA IS AN ARRAY
    for (i=0;i<data.length;i++) {
        madlibOptions.push(data[i].dataValues.id);
    }
    // console.log(madlibOptions);
    var madlib = madlibOptions[Math.floor(Math.random()*madlibOptions.length)]; //THIS PICKS A RANDOM MADLIB FROM THE CATEGORY
    //console.log(madlib);

    //Push Entry Data to Database
    let newEntry = {
        lib_id: madlib,
        // author_id: - ERIK, THIS NEEDS TO BE LINKED TO THE USERSID
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

      //DISPLAY MADLIB + WORDS
        Models.libs.findOne({
            where: {
                id: madlib
            }
          }).then((data)=>{
            finalMadlib = [];
            finalMadlib.push(data.dataValues.id);
            finalMadlib.push(entries.dataValues.id);
            console.log(finalMadlib);

              res.render("./madlib");

            });

           
          
     });
    });
    
});

router.get("/api/current-entry", function(req, res) {
    Models.entries.findOne({
        where: {
            id: finalMadlib[1]
        }
      }).then((currentEntry)=>{ 
        res.json(currentEntry);
        console.log(currentEntry);
      });
});


router.delete("/api/current-entry", function(req, res) {
    Models.entries.destroy({
      where: {
        id: finalMadlib[1]
      }
    }).then(function(currentEntry) {
      res.json(currentEntry);
    });
  });

    //DO A JOIN INSTEAD OF USING ARRAY?
router.get("/api/currentlib", function(req, res) {
    console.log(finalMadlib);
    Models.libs.findOne({
        where: {
            id: finalMadlib[0]
        }
      }).then((data)=>{ 
        Models.entries.findOne({
            where: {
                id: finalMadlib[1]
            }
          }).then((entries)=>{ 
            var finalMadlibWords = [];
            
            finalMadlibWords.push(data.dataValues.phrase_1);
            finalMadlibWords.push(entries.dataValues.word_1);
            finalMadlibWords.push(data.dataValues.phrase_2);
            finalMadlibWords.push(entries.dataValues.word_2);
            finalMadlibWords.push(data.dataValues.phrase_3);
            finalMadlibWords.push(entries.dataValues.word_3);
            finalMadlibWords.push(data.dataValues.phrase_4);
            finalMadlibWords.push(entries.dataValues.word_4);
            finalMadlibWords.push(data.dataValues.phrase_5);
            finalMadlibWords.push(entries.dataValues.word_5);
            finalMadlibWords.push(data.dataValues.phrase_6);
            finalMadlibWords.push(entries.dataValues.word_6);
            finalMadlibWords.push(data.dataValues.phrase_7);
            finalMadlibWords.push(entries.dataValues.word_7);
            finalMadlibWords.push(data.dataValues.phrase_8);
            finalMadlibWords.push(entries.dataValues.word_8);
            finalMadlibWords.push(data.dataValues.phrase_9);
            finalMadlibWords.push(entries.dataValues.word_9);
            finalMadlibWords.push(data.dataValues.phrase_10);
            finalMadlibWords.push(entries.dataValues.word_10);
            finalMadlibWords.push(data.dataValues.phrase_11);
            finalMadlibWords.push(entries.dataValues.word_11);
            finalMadlibWords.push(data.dataValues.phrase_12);
            finalMadlibWords.push(entries.dataValues.word_12);
            finalMadlibWords.push(data.dataValues.phrase_13);
            finalMadlibWords.push(entries.dataValues.word_13);
            finalMadlibWords.push(data.dataValues.phrase_14);
            finalMadlibWords.push(data.dataValues.category_id);
            res.json(finalMadlibWords);

    });
      });        
    


    });

    

    passport.serializeUser(function(user, cb) {
        cb(null, user);
      });
      
      passport.deserializeUser(function(id, cb) {
          cb(null, id);
      });


    //DO A JOIN TABLES FOR GALLERY ROUTE - PULL ENTRIES & ASSOCIATED MADLIBS
     router.get("/api/gallerylibs", function(req, res) {
        Models.libs.findAll({
            
          include: [Models.entries]
          }).then(function(gallery) {
            res.json(gallery);
          });
        });
     
        
        function authenticationMiddleware () {  
            return (req, res, next) => {
                console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
        
                if (req.isAuthenticated()) return next();
                res.redirect('/register')
            }
        }


module.exports = router;