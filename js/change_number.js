"use strict";

//方法一

// var ADDPlus = () => {
//     var val = document.getElementById("number_change").value ;
//     document.getElementById("number_change").value = ++val ;
// };

// var ADDMinus = () => {
//     var val = document.getElementById("number_change").value ;
//     document.getElementById("number_change").value = --val ;
// };

// document.getElementById("plus").addEventListener("click",ADDPlus);
// document.getElementById("minus").addEventListener("click",ADDMinus);

//方法二
var add_btn = document.getElementById("plus");
var mis_btn = document.getElementById("minus");
var value = parseInt(document.getElementById("number_change").value);
var count_price = document.getElementById("count_price").innerText;
var plan1 = document.getElementById(plan1);
var plan2 = document.getElementById(plan2);

add_btn. addEventListener("click" ,() =>{
 
  if(value >= 0){
   value = value + 1;
   document.getElementById("number_change").value = value;
   document.getElementById("count_price").innerText = 490 * value;
  }
});

mis_btn. addEventListener("click" ,() =>{
  if(value > 1){
   value = value - 1;
   document.getElementById("number_change").value = value;
   document.getElementById("count_price").innerText = 490 * value;s
  }
});

