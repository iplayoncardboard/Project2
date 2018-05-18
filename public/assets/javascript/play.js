

$(document).ready(function() {
   // var router = require("app.js");
   // console.log(router.finalMadlib);
 //currently hard coded, should have it autopopulate options with categories (use get API route)
    $("#selectCategory").change(function(){
        // event.preventDefault();

        //**HAVE BACKGROUND CHANGE WITH SELECTION HERE
        var Cat = $("#selectCategory").val();
        console.log(Cat);
        if (Cat === "0") {
            $("#entries-form").hide();;
        } else {
            $("#entries-form").show();
        }  
    });


      

  });