const express = require("express");
var User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
});

router.post('/register', (req, res)=>{
    
    let newUser = {
        userName: req.body.user_name,
        pw_hash: req.body.password
    }
    console.log(User);
    // User.create(newUser).then((user)=>{
    //     res.json(user);
    // });

});


// app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

router.post
router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;