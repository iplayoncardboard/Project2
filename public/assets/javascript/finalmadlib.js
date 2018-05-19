$(document).ready(function() {
   
 $("#button-clear-table").click(function(){
 
  $.get("/api/currentlib", post, function() {
   var clearTable =[];
    res.json(clearTable);
  });
    // .then(function() {
    //   getPosts(postCategorySelect.val());
    // });

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
          

          
          
        });
      }

      getFinalLib();
   });