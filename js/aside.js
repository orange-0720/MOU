var aside_btn = document.getElementById("aside_open");
var aside = document.getElementsByClassName("aside")[0];

aside_btn.onclick = function(){
    aside_btn.classList.toggle("aside-open");
    aside.classList.toggle("aside-on")
}
