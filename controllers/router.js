const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
});

router.post('/register', (req, res)=>{
    console.log("GDFDSFDSFDSFDS");
    console.log(req.body.user_name);
    console.log(req.body.password);
    console.log(req.body.password_compare);
})

router.post
router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;