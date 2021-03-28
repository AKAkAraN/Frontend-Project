// JavaScript source code
var edit_button = document.getElementById("edit");
var save_button = document.getElementById("save");

var title_blog = document.getElementById("container_heading_1");
var title_blog_edit = document.getElementById("container_heading_1_edit");

var body_content = document.getElementById("post_body");
var body_content_edit = document.getElementById("post_body_edit");

var like = document.getElementById("like");
var like_counter = document.getElementById("like_counter");

var comment_content = document.getElementById("comment_add_content");
var comment_section = document.getElementById("all_comment");

function edit_post() {
    title_blog.style.display = "none";
    title_blog_edit.style.display = "block";

    body_content.style.display = "none";
    body_content_edit.style.display = "block";

    edit_button.style.display = "none";
    save_button.style.display = "block";

    title_blog_edit.value = title_blog.textContent;
    var val = body_content.textContent.trim();
    body_content_edit.innerHTML = val;


    body_content_edit.style.height = "1px";
    body_content_edit.style.height = (25 + body_content_edit.scrollHeight) + "px";

}

function save_post() {
    title_blog.style.display = "block";
    title_blog_edit.style.display = "none";

    body_content.style.display = "block";
    body_content_edit.style.display = "none";

    edit_button.style.display = "block";
    save_button.style.display = "none";

    title_blog.innerHTML = title_blog_edit.value;
    body_content.innerHTML = body_content_edit.value;
}

var count = 0;

function like_post() {

    like.innerHTML = "<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    count++;
    if (count == 1) {
        like_counter.innerHTML = "1 person has liked it";
    }
    else {
        like_counter.innerHTML = count + " people have liked it";
    }

}

function post_comment() {
    var new_para = document.createElement("P");
    var text = document.createTextNode(comment_content.value);
    new_para.appendChild(text);
    new_para.setAttribute("class", "comment_content");
    comment_section.insertBefore(new_para, comment_section.childNodes[0]);
}