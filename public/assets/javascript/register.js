document.getElementById('reg_submit').addEventListener("click", (event) =>{
    //  console.log(event);
     
     

//get user name
let userName = document.getElementById('user_name').value;
//get password
let password = document.getElementById('password').value;
//get password verification 
let passCompare = document.getElementById('password_compare').value;
//verify the username only contains numbers, letters, _ , or -.
// window.location.reload()
if(evaluateUserName(userName) && matchPassword(password,passCompare)){
    return true;
}

else{
    event.preventDefault();
}

});


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