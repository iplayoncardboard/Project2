

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
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("#entries-form").hide();;

        } else if (Cat === "1") {
            $("#entries-form").show();
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-sleep");
            console.log("show background");


        } else if (Cat === "2") {
            $("#entries-form").show();
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-baby");
            console.log("show background");


        } else if (Cat === "3") {
            $("#entries-form").show();
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-camp");
            console.log("show background");


        } else if (Cat === "4") {
            $("#entries-form").show();
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-wedding");
            console.log("show background");


        }else {
            $("#entries-form").show();
        }
    });


      

  });


//   switch (Cat) {
//     $('body').removeClass('body.sleep body.camp body.bridal body.baby');
//     case "sleep":
    
//       break;
//     case "camp":
//     $('body').addClass('body.camp');
//       break;
//     case "bridal":
//     $('body').addClass('body.bridal');
//       break;
//     case "baby":
//     $('body').addClass('body.baby');
//       break;
//     default:
//       console.log("This is not a valid command.");