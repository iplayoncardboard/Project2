
var email = document.getElementById("user_name");

email.addEventListener("input", function (event) {
  if (email.validity.rangeUnderflow) {
      console.log("ERROR");
    document.getElementById('un_group').innerHTML += '<div id="un_alert" class="alert alert-danger" role="alert"> User name must be more than 5 characters. </div>'
  } else {
    email.setCustomValidity("");
  }
});


// document.getElementById('reg_submit').addEventListener("click", (event) =>{
//     //  console.log(event); 

// //get user name
// let userName = document.getElementById('user_name').value;
// //get password
// let password = document.getElementById('password').value;
// //get password verification 
// let passCompare = document.getElementById('password_compare').value;
// //verify the username only contains numbers, letters, _ , or -.
// // window.location.reload()


// });



let formEval = (un,pw,pw_compare)=>{
    if(evaluateUserName(un) && matchPassword(pw,pw_compare)){
        return true;
    }
    
    else{
        event.preventDefault();
    }
}

//verify that the passwords match
let evaluateUserName = (userName)=>{

    if(userName.length<5){
        document.getElementById('un_group').innerHTML += '<div class="alert alert-danger" role="alert"> User name must be more than 5 characters. </div>'
        return false;
    }   
    else return true;

};

//verify that the passwords match
let matchPassword = (pass, pass_compare)=>{
    if(pass !== pass_compare){
        document.getElementById('pw_group').innerHTML += '<div class="alert alert-danger" role="alert"> Password must Match. </div>'
        return false;
    }
    else return true;
}