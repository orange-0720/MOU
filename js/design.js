var design_start = document.getElementsByClassName("start")[0];
var jump_back = document.getElementsByClassName("jump_back")[0];
var design_page = document.getElementsByClassName("design_page")[0];

design_start.addEventListener("click", function(){
    design_page.classList.remove("fadeout");
    design_page.classList.add("fadein");
    design_page.style.display = "block";
});

jump_back.addEventListener("click", function(){
    design_page.classList.remove("fadein");
    design_page.classList.add("fadeout");
    design_page.style.display = "none";
})

