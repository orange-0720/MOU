var ham_btn = document.getElementById("hamburger");
var ham_under = document.getElementById("hamburger_under_line");
var ham_middle = document.getElementById("hamburger_middle_line");
var ham_top = document.getElementById("hamburger_top_line");
var header_nav = document.getElementById("header_nav");


ham_btn.addEventListener("click", function(){
    // alert("hello");
    ham_top.classList.toggle("up_donw");
    ham_middle.classList.toggle("middle");
    ham_under.classList.toggle("donw_up");
    header_nav.classList.toggle("nav_open");
})