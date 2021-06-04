var put_in = document.getElementById("put_in");

put_in.addEventListener("click",function(){
    alert("已將此商品加入購物車")
    let inside_cart = document.getElementById("inside_cart");
    let cart_list = document.getElementsByClassName("cart_list")[0];
    let img_el = document.getElementsByClassName("img_el")[0];
    let product_name = document.getElementsByClassName("product_name")[0].innerHTML;
    let product_value = document.getElementById("number_change").value;
    let count_price = document.getElementById("count_price").innerHTML;
    let pay_money = document.getElementsByClassName("pay_money")[0];


    console.log(count_price)
    inside_cart.style.display = "none";
    pay_money.innerHTML = "進入結帳頁面";
    pay_money.href = "#";
    cart_list.insertAdjacentHTML("beforeend",`
        <li>
            <div class="shopping_li_list">
                <p>商品圖片</p>
                <p>商品名稱</p>
                <p>商品數量</p>
                <p>金額小計</p>
                <i>刪除</i>
            </div>
            <div class="shopping_detail_list">
                <img class="shoppimg_img" src="`+ img_el.src +`"></img>
                <p>`+ product_name +`</p>
                <section>
                    <button type="button" class ="cart_minus">  </button>
                    <input type = "text" class="in_cart_number" value="`+ product_value +`" disabled>
                    <button type="button" class ="cart_plus">  </button>
                </section>
                <p class="cart_total_price">`+ count_price + "元" +`</p>
                <button class='remove'></button>
            </div>
        </li>`
    )
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
        let shopping_list = e.target.closest("li");
        let pay_money = document.getElementsByClassName("pay_money")[0];
        if(confirm("確定刪除此商品??")){
            shopping_list.closest("li").remove();
            // console.log(e.target.closest("ul"));
            if(e.target.closest("ul")== null){
                inside_cart.style.display = "block";
                pay_money.innerHTML = "商品一覽";
                pay_money.href = "./shopping _page.html";
            }
        }
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_plus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_total_price = e.target.closest("li").querySelector("p.cart_total_price");
         
        e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) + 1;
        cart_total_price.innerHTML = (490 * parseInt(in_cart_number.value)) + "元";
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_minus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_total_price = e.target.closest("li").querySelector("p.cart_total_price");
        if(in_cart_number.value > 1){
            e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) - 1 ;
            cart_total_price.innerHTML = (490 * parseInt(in_cart_number.value)) + "元";
        }
        
    }
})
