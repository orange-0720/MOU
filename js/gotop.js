"use strict"

var gotop = document.getElementById("pagetop");
var rootelement = document.documentElement;

function scrolltotop(){
    rootelement.scrollTo({
        top: 0,
        behavior:"smooth"
    });
};

window.onscroll = function showUp(){
    if(document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000){
    gotop.style.display = "inline-block";
    gotop.className = "fadein"
    }else{
        gotop.style.display = "none"
    };
}

gotop.addEventListener("click",scrolltotop);




// $(function() {
//     /* 按下GoTop按鈕時的事件 */
//     document.getElementById("pagetop").click(function(){
//         $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
//         return false;
//     });
// }