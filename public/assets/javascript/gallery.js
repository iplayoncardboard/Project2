function getFinalLib() {
        
    $.get("/api/gallerylibs", function(data) {
 
        for (i=0;i<data.length;i++) {
            // make cards & apped a new "gallery card/div for each length, have a scrolling / something that collapses"
    $("#gallery"+i).append(data[i].phrase_1);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_1+"</span>");
    $("#gallery"+i).append(data[i].phrase_2);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_2+"</span>");
    $("#gallery"+i).append(data[i].phrase_3);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_3+"</span>");
    $("#gallery"+i).append(data[i].phrase_4);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_4+"</span>");
    $("#gallery"+i).append(data[i].phrase_5);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_5+"</span>");
    $("#gallery"+i).append(data[i].phrase_6);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_6+"</span>");
    $("#gallery"+i).append(data[i].phrase_7);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_7+"</span>");
    $("#gallery"+i).append(data[i].phrase_8);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_8+"</span>");
    $("#gallery"+i).append(data[i].phrase_9);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_9+"</span>");
    $("#gallery"+i).append(data[i].phrase_10);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_10+"</span>");
    $("#gallery"+i).append(data[i].phrase_11);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_11+"</span>");
    $("#gallery"+i).append(data[i].phrase_12);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_12+"</span>");
    $("#gallery"+i).append(data[i].phrase_13);
    $("#gallery"+i).append("<span class='entry2'> "+data[i].entries[0].word_13+"</span>");
    $("#gallery"+i).append(data[i].phrase_14);
// }
}
    });
}

 getFinalLib();

