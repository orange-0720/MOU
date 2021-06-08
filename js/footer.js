var footer_nav_list1 = document.getElementsByClassName("footer_nav_list")[0];
var footer_nav_list2 = document.getElementsByClassName("footer_nav_list")[1];
var footer_nav_list3 = document.getElementsByClassName("footer_nav_list")[2];
var footer_brand_all = document.getElementsByClassName("footer_brand_all");
var footer_product_all = document.getElementsByClassName("footer_product_all");
var footer_know_all = document.getElementsByClassName("footer_know_all");

footer_nav_list1.onclick = function(){
    this.classList.toggle("change_bkc")
    document.getElementsByClassName("footer_intro")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_brand_all.length;i++){
        footer_brand_all[i].classList.toggle("footer_nav_open")
    }
}

footer_nav_list2.onclick = function(){
    this.classList.toggle("change_bkc")
    document.getElementsByClassName("footer_product")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_product_all.length;i++){
        footer_product_all[i].classList.toggle("footer_nav_open")
    }
}

footer_nav_list3.onclick = function(){
    this.classList.toggle("change_bkc")
    document.getElementsByClassName("footer_knowledge")[0].classList.toggle("slide_down");
    for(let i = 0; i<footer_know_all.length;i++){
        footer_know_all[i].classList.toggle("footer_nav_open")
    }
}