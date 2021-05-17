var gotop = document.getElementById("pagetop");
var rootelement = document.documentElement;

window.onscroll = function myFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("think").className = "move_up";
    };
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("advantage").className = "move_up";
    };
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        gotop.style.display = "inline-block";
        gotop.className = "fadein"
        }else{
            gotop.style.display = "none"
        };
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("insist").className = "move_up";
    };
};



function scrolltotop(){
    rootelement.scrollTo({
        top: 0,
        behavior:"smooth"
    });
};

gotop.addEventListener("click",scrolltotop);