
var conf_model = document.getElementsByClassName("Confirmation_box_model")[0];
var close_btn = document.querySelectorAll(".trash");

function closeconf(){
    conf_model.style.display = "none";
}


function navigateToPost() {
    location.href = "post.html"
}
var i;
for (i = 0; i < close_btn.length; i++) {
    let btn = close_btn[i];
    btn.onclick = function () {
        conf_model.style.display = "flex";
    }
}
