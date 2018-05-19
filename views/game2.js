$ (document).ready (function() {
    $("#selectCategory").change(function(){
        var Cat= $("#selectCategory").val();
        console.log(Cat);
        if (Cat === "0"){
            $("#entries-form").hide();
        }else {
            $("#entries-form").show();
            
            //on click?
            function displayBG() {
                console.log("display");
            switch (Cat) {
                $('body').removeClass('body.sleep body.camp body.bridal body.baby');
                case "sleep":
                $('body').addClass('body.sleep');
                  break;
                case "camp":
                $('body').addClass('body.camp');
                  break;
                case "bridal":
                $('body').addClass('body.bridal');
                  break;
                case "baby":
                $('body').addClass('body.baby');
                  break;
                default:
                  console.log("This is not a valid command.");
              }

        };
    })
});

{/* <script>  Different ways of changing backgrounds...JJP  Notes
function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('img_tree.png')";
    document.getElementById('element_id').style.backgroundImage = 'url(imageX.gif)';  

}
</script> */}
// function calcBackground() {
//     switch (counter) {
//         $('body').removeClass('background1 background2 background3');
//         case 1:
//             $('body').addClass('background1');
//             break;
//         case 2:
//             $('body').addClass('background2');
//             break;
//         case 3:
//             $('body').addClass('background3');
//             break;
//         default:
//             //nothing of note here
//     }

// CSS

// #button{
//    background-image: url("initial_image.png");
// }

// #button.toggled{
//   background-image:url("toggled_image.png");
// }
// JS

// $('#button').click(function(){
//   $('#my_content').toggle();
//   $(this).toggleClass('toggled');
// });