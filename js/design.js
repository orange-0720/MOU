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


/* 拖拉圖片 */

var big_photo = document.getElementById("big_photo");
let design_img = document.getElementsByClassName("design_img")[0];
let design_img_offsetLeft = design_img.offsetLeft;
let design_img_offsetTop = design_img.offsetTop;
console.log("desing_img的offsetLeft =" + design_img_offsetLeft );
console.log("desing_img的offsetTop =" + design_img_offsetTop );

big_photo.addEventListener("mousedown", function(e){
    let big_photo_left = e.pageX - design_img_offsetLeft - e.target.offsetLeft;
    let big_photo_top = e.pageY - design_img_offsetTop - e.target.offsetTop;
    console.log(e)
    console.log(e.target)
    console.log("e.pageX =" + e.pageX );
    console.log("e.pageY =" + e.pageY);
    console.log("e.target的offsetLeft =" + e.target.offsetLeft);
    console.log("e.target的offsetTop =" + e.target.offsetTop);
    console.log("big_photo_left =" + big_photo_left);
    console.log("big_photo_top =" + big_photo_top)
    const move = e=>{
        big_photo.style.left = e.pageX - big_photo_left - design_img_offsetLeft + "px";
        big_photo.style.top = e.pageY - big_photo_top - design_img_offsetTop + "px";
    }

    document.addEventListener("mousemove", move);

    big_photo.addEventListener("mouseup", function(e){
        document.removeEventListener("mousemove", move);
    })
});