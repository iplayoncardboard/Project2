$(document).ready(function() {
   
//  $("#button-clear-table").click(function(){
 
//   $.get("/api/currentlib", post, function() {
//    var clearTable =[];
//     res.json(clearTable);
//   });
//     // .then(function() {
//     //   getPosts(postCategorySelect.val());
//     // });


//  });


$('#checkbox').click(function() {
  if ($(this).is(':checked')) {
    $('span input').attr('checked', true);
  } else {
    $('span input').attr('checked', false);
  }
});



$('#button-play-again').click(function(){
  if ($("#checkbox").is(":checked")) {
    
    console.log("Madlib Entry is Saved to Database");

    

  } else {
    console.log("Checkbox is NOT Checked");
    //ADD DELETE DATABASE FUNCTION
    $.ajax({
      method: "DELETE",
      url: "/api/current-entry"
    })
    // .then(getAuthors);
    
  }
   //event.preventDefault();
   //alert("THIS IS A TEST");
   $('body').load("/play");
    
 }); 

    function getFinalLib() {
        
        $.get("/api/currentlib", function(data) {
          console.log(data);
        //    for(var i=0; data.length; i+2){
        
        //   $("#madlib").append(data[i]);
        //   $("#madlib").append("<span class='entry'>"+data[i+1]+"</span>");
        //  }
         

         $("#madlib").append(data[0]);
          $("#madlib").append("<span class='entry'> "+data[1]+"</span>");
          $("#madlib").append(data[2]);
          $("#madlib").append("<span class='entry'>"+data[3]+" </span>");
          $("#madlib").append(data[4]);
          $("#madlib").append("<span class='entry'>"+data[5]+" </span>");
          $("#madlib").append(data[6]);
          $("#madlib").append("<span class='entry'> "+data[7]+" </span>");
          $("#madlib").append(data[8]);
          $("#madlib").append("<span class='entry'> "+data[9]+"</span>");
          $("#madlib").append(data[10]);
          $("#madlib").append("<span class='entry'> "+data[11]+" </span>");
          $("#madlib").append(data[12]);
          $("#madlib").append("<span class='entry'> "+data[13]+"</span>");
          $("#madlib").append(data[14]);
          $("#madlib").append("<span class='entry'> "+data[15]+" </span>");
          $("#madlib").append(data[16]);
          $("#madlib").append("<span class='entry'> "+data[17]+" </span>");
          $("#madlib").append(data[18]);
          $("#madlib").append("<span class='entry'> "+data[19]+" </span>");
          $("#madlib").append(data[20]);
          $("#madlib").append("<span class='entry'> "+data[21]+" </span>");
          $("#madlib").append(data[22]);
          $("#madlib").append("<span class='entry'> "+data[23]+" </span>");
          $("#madlib").append(data[24]);
          $("#madlib").append("<span class='entry'> "+data[25]+"</span>");
          $("#madlib").append(data[26]);

          console.log (data[27]);
           if (data[27] === 1) {
           
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-sleep");
            


        } else if (data[27] === 2) {
           
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-baby");
           


        } else if (data[27] === 3) {
            
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-camp");
     


        } else if (data[27] === 4) {
            
            $('body').removeClass('body-sleep body-camp body-wedding body-baby');
            $("body").addClass("body-wedding");
      


        }else {
          $('body').removeClass('body-sleep body-camp body-wedding body-baby');
        }

  
        });
      }
      getFinalLib();

   });