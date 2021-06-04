var design_start = document.getElementsByClassName("start")[0];
var jump_back = document.getElementsByClassName("jump_back")[0];
var design_page = document.getElementsByClassName("design_page")[0];
var body = document.getElementsByTagName("body")[0];

design_start.addEventListener("click", function(){
    body.classList.toggle("is_fixed")
    design_page.classList.remove("fadeout");
    design_page.classList.add("fadein");
    design_page.style.display = "block";
});

jump_back.addEventListener("click", function(){
    body.classList.toggle("is_fixed")
    design_page.classList.remove("fadein");
    design_page.classList.add("fadeout");
    design_page.style.display = "none";
})


/* ====== 更換圖片  ======= */ 
let color_change = document.getElementsByClassName("color_change");

color_change[0].addEventListener("click", function(){
    let img_el = document.getElementsByClassName("img_el")[0];
    img_el.src = "./images/nethat/001979675f6da9ea18354b4c36fcb702.png";
})

color_change[1].addEventListener("click", function(){
    let img_el = document.getElementsByClassName("img_el")[0];
    img_el.src = "./images/nethat/da3d8de8325fa9b34f708e89d584a1f9.png";
})

color_change[2].addEventListener("click", function(){
    let img_el = document.getElementsByClassName("img_el")[0];
    img_el.src = "./images/nethat/8c31128a7b0d92026a066fa5ada0055d.png";
})

color_change[3].addEventListener("click", function(){
    let img_el = document.getElementsByClassName("img_el")[0];
    img_el.src = "./images/nethat/2028f7507e3d4ae521f6500ac82ad7da.png";
})

color_change[4].addEventListener("click", function(){
    let img_el = document.getElementsByClassName("img_el")[0];
    img_el.src = "./images/nethat/91a724520815fcf572da571af6b9a8d2.png";
})