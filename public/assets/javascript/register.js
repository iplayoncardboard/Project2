document.getElementById('reg_submit').addEventListener("click", (event) =>{
    //  console.log(event);
     event.preventDefault();
     

//get user name
let userName = document.getElementById('user_name').value;
//get password
let password = document.getElementById('password').value;
//get password verification 
let passCompare = document.getElementById('password_compare').value;
//verify the username only contains numbers, letters, _ , or -.

evaluateUserName(userName);

//verify that the password is at least 8 characers long.

//verify that the passwords match

});


let evaluateUserName = (userName)=>{
    if(userName.length<5){
        document.getElementById('un_group').innerHTML += '<div class="alert alert-danger" role="alert"> User name must be more than 5 characters. </div>'
    }
    else{
        window.location.reload();
    }

};