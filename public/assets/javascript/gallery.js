function getFinalLib() {
        
    $.get("/api/gallerylibs", function(data) {

        $("#gallery1").append(data[0]);
      $("#gallery1").append("<span class='entry'> "+data[1]+"</span>");
      $("gallery1").append(data[2]);
      $("#gallery1").append("<span class='entry'>"+data[3]+" </span>");
      $("#gallery1").append(data[4]);
      $("#gallery1").append("<span class='entry'>"+data[5]+" </span>");
    //   $("#madlib").append(data[6]);
    //   $("#madlib").append("<span class='entry'> "+data[7]+" </span>");
    //   $("#madlib").append(data[8]);
    //   $("#madlib").append("<span class='entry'> "+data[9]+"</span>");
    //   $("#madlib").append(data[10]);
    //   $("#madlib").append("<span class='entry'> "+data[11]+" </span>");
    //   $("#madlib").append(data[12]);
    //   $("#madlib").append("<span class='entry'> "+data[13]+"</span>");
    //   $("#madlib").append(data[14]);
    //   $("#madlib").append("<span class='entry'> "+data[15]+" </span>");
    //   $("#madlib").append(data[16]);
    //   $("#madlib").append("<span class='entry'> "+data[17]+" </span>");
    //   $("#madlib").append(data[18]);
    //   $("#madlib").append("<span class='entry'> "+data[19]+" </span>");
    //   $("#madlib").append(data[20]);
    //   $("#madlib").append("<span class='entry'> "+data[21]+" </span>");
    //   $("#madlib").append(data[22]);
    //   $("#madlib").append("<span class='entry'> "+data[23]+" </span>");
    //   $("#madlib").append(data[24]);
    //   $("#madlib").append("<span class='entry'> "+data[25]+"</span>");
    //   $("#madlib").append(data[26]);

    });
}

 getFinalLib();

