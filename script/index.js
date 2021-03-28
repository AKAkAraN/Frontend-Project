function showSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
}
function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}
function showSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
}
function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}

function showCreatePost() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
}
    
  
  function hideCreatePostModal(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }
  
  function navigateToBlogList(){
    location.href = "html/bloglist.html"
  }
  