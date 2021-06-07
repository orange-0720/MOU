var pick_photo = document.getElementById("pick_photo");
var name1 = document.getElementsByClassName("name")[0];
var name2 = document.getElementsByClassName("name")[1];
var photo = document.getElementById("photo");
var big_photo = document.getElementById("big_photo");
var check_logo = document.getElementById("check_logo");
var simple = document.getElementById("simple");
var file_bt = document.getElementsByClassName("file_bt")[0];

pick_photo.addEventListener("change", function(){
    console.log(this.files[0]);
    console.log(this.files[0].name)
    name1.innerHTML = this.files[0].name;
    name2.innerHTML = this.files[0].type;
    check_logo.innerHTML = "(您的圖稿)";

    let reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", function(){
        console.log(reader.result);
        photo.src = reader.result;
        big_photo.src = reader.result;
        big_photo.style.display = "inline-block"

        // var image = new Image();
        // image.src = reader.result;
        // image.addEventListener("load", function(){
        //     console.log(this.width);
        //     console.log(this.height);
        // })
    })
})

simple.addEventListener("change", function(){
    big_photo.style.display = "none";
    file_bt.classList.toggle("prevent_stop");

})
