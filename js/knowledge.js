var flat_hat = document.getElementsByClassName("flat_hat")[0];
var canvas_hat = document.getElementsByClassName("canvas_hat")[0];
var knitted_hat = document.getElementsByClassName("knitted_hat")[0];
var cap_hat = document.getElementsByClassName("cap_hat")[0];

flat_hat.addEventListener("click", function(){
    document.getElementsByClassName("flat_1")[0].classList.toggle("-on");
    document.getElementsByClassName("flat_2")[0].classList.toggle("-on");
});

canvas_hat.addEventListener("click", function(){
    document.getElementsByClassName("canvas_1")[0].classList.toggle("-on");
    document.getElementsByClassName("canvas_2")[0].classList.toggle("-on");
});

knitted_hat.addEventListener("click", function(){
    document.getElementsByClassName("knitted_1")[0].classList.toggle("-on");
    document.getElementsByClassName("knitted_2")[0].classList.toggle("-on");
});

cap_hat.addEventListener("click", function(){
    document.getElementsByClassName("cap_1")[0].classList.toggle("-on");
    document.getElementsByClassName("cap_2")[0].classList.toggle("-on");
    document.getElementsByClassName("cap_3")[0].classList.toggle("-on");
});