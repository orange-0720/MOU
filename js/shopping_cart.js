var put_in = document.getElementById("put_in");
console.log(put_in);

put_in.addEventListener("click",function(){
    alert("已將此商品加入購物車")
    let inside_cart = document.getElementById("inside_cart");
    let cart_list = document.getElementsByClassName("cart_list")[0];
    let design_img_change = document.getElementsByClassName("design_img_change")[0];
    let url = design_img_change.style.backgroundImage;
    let product_name = document.getElementsByClassName("product_name")[0].innerHTML
    let count_price = document.getElementById("count_price").innerHTML;

    alert(url);
    console.log(design_img_change)
    // console.log(inside_cart)
    // console.log(cart_list)
    inside_cart.style.display = "none";
    cart_list.insertAdjacentHTML("beforeend",`
        <li>
            <div>
                <p>商品圖片</p>
                <img>圖片</img>
            </div>
            <div>
                <p>商品名稱<p>
                <p>`+ product_name +`</p>
            </div>
            <div>
                <p>商品數量</p>
                <section>
                    <input type = "text">
                    <section>
                        <button type="button" class ="cart_plus"> + </button>
                        <button type="button" class ="cart_minus"> - </button>
                    <section>
                </section>
            </div>
            <div>
                <p>金額小記<p>
                <p>`+ count_price + "元" +`</p>
            </div>
            <button class='remove'>移除</button>
        </li>`
    )
    var li_list = document.getElementsByTagName("li")
  
    for(let i =0; i<li_list.length;i++){
        var remove_btn = document.getElementsByClassName("remove")[i];
        remove_btn.onclick = function(){
            // if(li_list.length <= 0){
            //     inside_cart.style.display = "inline-block"
            // }   
            confirm("確定刪除此商品?")
            if(true){
                this.closest("li").remove();
                console.log(this)
            }
        }
    }
})

