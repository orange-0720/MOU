var qa_alert = document.getElementById("qa_alert");
var btn = document.getElementById("jump_window");
var close = document.getElementById("qa_close")
const facebook = document.getElementById("facebook");
const inst = document.getElementById("inst")
const twitter = document.getElementById("twitter")


btn.addEventListener("click",function(e){
  let email_el = document.getElementById("mail");
  let password_el = document.getElementById("password");
  let password_again_el = document.getElementById("password_again");
  console.log(this);
  
  if(email_el.value.indexOf("@") > 0 && email_el.value.indexOf(".com") > 0 && password_el.value.length >= 8 && password_el.value == password_again_el.value){    
        qa_alert.classList.add("fadein");
        qa_alert.style.display = "block";
        email_el.style.border = "1px solid #737578";
        password_el.style.border = "1px solid #737578";
  }else{
      if(email_el.value.indexOf("@") < 0 || email_el.value.indexOf(".com") < 0){
        email_el.focus();
        email_el.style.border = "1px solid red";
        let form_mail_el = document.getElementsByClassName("form_mail")[0];
        let str = '<p class="insert_element" style="color:red;margin-left:calc((100% - 300px) / 2)">e-mail格式有誤，請確認!</p>'
        form_mail_el.insertAdjacentHTML("afterend", str);
      }else if(password_el.value.length < 8){
        password_el.focus();
        password_el.style.border = "1px solid red";
        let form_password_el = document.getElementsByClassName("form_password")[0];
        let pass_str = '<p class="insert_element" style="color:red;margin-left:calc((100% - 300px) / 2)">密碼至少8個字元!</p>'
        form_password_el.insertAdjacentHTML("afterend", pass_str);
      }else if(password_el.value !== password_again_el.value){
        password_again_el.style.border = "1px solid red";
        let password_check = document.getElementsByClassName("password_check")[0];
        let pass_check_str = '<p class="insert_element" style="color:red;margin-left:calc((100% - 300px) / 2)">密碼不吻合!</p>';
        password_check.insertAdjacentHTML("afterend", pass_check_str);
      }
    }
});

document.addEventListener("click", function(e){
  if(e.target.closest("section#qa_jump")){
    console.log(e.target);
    let qa_jump = e.target.closest("section");
    if(qa_jump.classList.contains("qa_jump")){
      console.log("點擊在頁面上")
    }
  }else if(e.target.closest("div#qa_alert")){
      qa_alert.classList.remove("fadein");
      qa_alert.style.display = "none";
  }
})


