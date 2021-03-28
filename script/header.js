
var signup_modal = document.getElementsByClassName("Signup_modal")[0];


var signup_btn = document.getElementsByClassName("topButtons")[0];

var signup_close_btn=document.getElementsByClassName("signup_close")[0];

signup_btn.onclick = function() {
    signup_modal.style.display = "flex";

}

signup_close_btn.onclick=function () {
    signup_modal.style.display="none";
}



var signin_modal = document.getElementsByClassName("Signin_modal")[0];

var signin_btn = document.getElementsByClassName("topButtons")[1];

var signin_close_btn=document.getElementsByClassName("signin_close")[0];

signin_btn.onclick = function() {
    signin_modal.style.display = "flex";

}

signin_close_btn.onclick=function () {
    signin_modal.style.display="none";
}


var signup_in_signin=document.getElementsByClassName("signup_in_signin")[0];

signup_in_signin.onclick=function()
{
    signin_modal.style.display="none";
    signup_modal.style.display="flex";
}





window.onclick = function(event) {
    if (event.target === signup_modal) {
        signup_modal.style.display = "none";
    }
    if (event.target === signin_modal) {
        signin_modal.style.display = "none";
    }
}

