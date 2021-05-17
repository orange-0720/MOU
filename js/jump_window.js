var qa_alert = document.getElementById("qa_alert");
var btn = document.getElementById("jump_window");
var close = document.getElementById("qa_close")
const facebook = document.getElementById("facebook");
const inst = document.getElementById("inst")
const twitter = document.getElementById("twitter")


btn.addEventListener("click",function(){
  // const password = document.getElementById("password").value;
  // const password_again = document.getElementById("password_again").value;
  // if(password.length < 8){
  //   window.alert("密碼不得少於八位數")
  // }else if(password !== password_again){
  //   window.alert("兩次密碼不吻合，請重新確認");
  // }else{
  qa_alert.classList.add("fadein");
  qa_alert.style.display = "block";
});

qa_alert.onclick = function(){
  qa_alert.classList.remove("fadein");
  qa_alert.style.display = "none";
}

facebook.addEventListener("click",function(){
  qa_alert.classList.add("fadein");
  qa_alert.style.display = "block";
});

inst.addEventListener("click",function(){
  qa_alert.classList.add("fadein");
  qa_alert.style.display = "block";
});

twitter.addEventListener("click",function(){
  qa_alert.classList.add("fadein");
  qa_alert.style.display = "block";
});
