var ham_btn = document.getElementById("hamburger");
var ham_under = document.getElementById("hamburger_under_line");
var ham_middle = document.getElementById("hamburger_middle_line");
var ham_top = document.getElementById("hamburger_top_line");
var header_nav = document.getElementById("header_nav");


ham_btn.addEventListener("click", function(){
    // alert("hello");
    ham_top.classList.toggle("up_donw");
    ham_middle.classList.toggle("middle_line");
    ham_under.classList.toggle("donw_up");
    header_nav.classList.toggle("nav_open");
})

// 購物車談窗

var cart_btn = document.getElementsByClassName("shopping_cart")[0];
var cart_close_btn = document.getElementsByClassName("shopping_cart_close")[0]
var shopping_cart_list = document.getElementsByClassName("shopping_cart_list")[0];
var pay_btn = document.getElementsByClassName("pay_money")[0];


cart_btn.addEventListener("click", function(){
    shopping_cart_list.classList.toggle("cart_open");
})

cart_close_btn.addEventListener("click", function(){
    shopping_cart_list.classList.toggle("cart_open");
})

