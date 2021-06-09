var aside_btn = document.getElementById("aside_open");
var aside = document.getElementsByClassName("aside")[0];

aside_btn.onclick = function(){
    aside_btn.classList.toggle("aside-open");
    aside.classList.toggle("aside-on")
}

document.addEventListener("click", function(e){
    if(e.target.closest("aside.aside")){
        console.log("點擊在aside側邊攔上")
    }else{
        if(aside.classList.contains("aside-on")){
            aside.classList.remove("aside-on");
        }
    }
})