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

var footer_nav_list1 = document.getElementsByClassName("footer_nav_list")[0];
var footer_nav_list2 = document.getElementsByClassName("footer_nav_list")[1];
var footer_nav_list3 = document.getElementsByClassName("footer_nav_list")[2];
var footer_brand_all = document.getElementsByClassName("footer_brand_all");
var footer_product_all = document.getElementsByClassName("footer_product_all");
var footer_know_all = document.getElementsByClassName("footer_know_all");

footer_nav_list1.onclick = function(){
    document.getElementsByClassName("footer_intro")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_brand_all.length;i++){
        footer_brand_all[i].classList.toggle("footer_nav_open")
    }
    // footer_brand_all[0].classList.toggle("footer_nav_open");
    // footer_brand_all[1].classList.toggle("footer_nav_open");
    // footer_brand_all[2].classList.toggle("footer_nav_open");
    // footer_brand_all[3].classList.toggle("footer_nav_open");
}

footer_nav_list2.onclick = function(){
    document.getElementsByClassName("footer_product")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_product_all.length;i++){
        footer_product_all[i].classList.toggle("footer_nav_open")
    }
    // footer_product_all[0].classList.toggle("footer_nav_open");
    // footer_product_all[1].classList.toggle("footer_nav_open");
    // footer_product_all[2].classList.toggle("footer_nav_open");
    // footer_product_all[3].classList.toggle("footer_nav_open");
}

footer_nav_list3.onclick = function(){
    document.getElementsByClassName("footer_knowledge")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_know_all.length;i++){
        footer_know_all[i].classList.toggle("footer_nav_open")
    }
    // footer_know_all[0].classList.toggle("footer_nav_open");
    // footer_know_all[1].classList.toggle("footer_nav_open");
    // footer_know_all[2].classList.toggle("footer_nav_open");
    // footer_know_all[3].classList.toggle("footer_nav_open");
}

