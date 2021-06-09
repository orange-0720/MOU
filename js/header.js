function get_tasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks){
      let inside_cart = document.getElementById("inside_cart");
      let pay_money = document.getElementsByClassName("pay_money")[0];
      let ul_task_list = "";
      let price = 0;
      let shopping_cart = document.getElementsByClassName("shopping_cart")[0];
      inside_cart.style.display = "none";
      pay_money.innerHTML = "進入結帳頁面";
      pay_money.href = "#";
      tasks.forEach(function(item,i){
        ul_task_list += 
            `
                <li data-id="${item.item_id}">
                    <div class="shopping_li_list">
                        <p>商品圖片</p>
                        <p>商品名稱</p>
                        <p>商品數量</p>
                        <p>金額小計</p>
                        <i>刪除</i>
                    </div>
                    <div class="shopping_detail_list">
                        <div class=""cart_pic>
                            <img class="shoppimg_img" src="${item.item_img}"></img>
                            <img class="logo_img" src="${item.item_logo}"></img>
                        </div>
                        <p>${item.item_name}</p>
                        <section>
                            <button type="button" class ="cart_minus">  </button>
                            <input type = "text" class="in_cart_number" value="${item.item_number}" disabled>
                            <button type="button" class ="cart_plus">  </button>
                        </section>
                        <p class="cart_total_price"><span class="cart_detail_price">${item.item_price}</span>元</p>
                        <button class='remove'></button>
                    </div>
                </li>
            `;
            price += parseInt(item.item_price);
        });

        pay_money.insertAdjacentHTML("beforebegin",
        `
            <p class="cart_total">金額總計 :<span class="cart_all_price">` + price + `</span>元</p>
        `);

        let cart_list = document.getElementsByClassName("cart_list")[0];
        cart_list.innerHTML = ul_task_list;

        let list_number = cart_list.children.length;
        shopping_cart.insertAdjacentHTML("beforeend",
        `
            <p class="cart_number">`+ list_number +`</p>
        `)
    }
}

/* localStorage 存取完成 */

get_tasks();

var ham_btn = document.getElementById("hamburger");
var ham_under = document.getElementById("hamburger_under_line");
var ham_middle = document.getElementById("hamburger_middle_line");
var ham_top = document.getElementById("hamburger_top_line");
var header = document.getElementById("header");
var background_el = document.getElementById("background_el");
var header_nav = document.getElementById("header_nav");

// 漢堡選單
ham_btn.addEventListener("click", function(){
    ham_top.classList.toggle("up_donw");
    ham_middle.classList.toggle("middle_line");
    ham_under.classList.toggle("donw_up");
    header_nav.classList.toggle("nav_open");
    background_el.classList.toggle("on");
    header.classList.toggle("change");
})

background_el.addEventListener("click", function(){
    ham_top.classList.toggle("up_donw");
    ham_middle.classList.toggle("middle_line");
    ham_under.classList.toggle("donw_up");
    header_nav.classList.toggle("nav_open");
    background_el.classList.toggle("on");
    header.classList.toggle("change");
});

// header導覽列展開

document.addEventListener("click", function(e){
    if(window.innerWidth <= 767){
        if(e.target.classList.contains("prevent")){
            e.preventDefault();
            let showup_el = e.target.closest("div").querySelector("a.showup_el");
            let slide_el = e.target.nextElementSibling;
            showup_el.classList.toggle("showup_add");
            slide_el.classList.toggle("prevent_open");
            e.target.classList.toggle("change_bkc")
            
        }
    }
})

// 購物車談窗

var cart_btn = document.getElementsByClassName("shopping_cart")[0];
var cart_close_btn = document.getElementsByClassName("shopping_cart_close")[0]
var shopping_cart_list = document.getElementsByClassName("shopping_cart_list")[0];
var pay_btn = document.getElementsByClassName("pay_money")[0];

// document.addEventListener("click", function(e){
//     if(e.target.closest("div.cart_open")){
//         shopping_cart_list.classList.add("cart_open");
//     }else{
//         shopping_cart_list.classList.remove("cart_open");
//     }
// })

cart_btn.addEventListener("click", function(){
    shopping_cart_list.classList.toggle("cart_open");

})

cart_close_btn.addEventListener("click", function(){
    shopping_cart_list.classList.toggle("cart_open");
})


/* 購物車點擊刪除等功能 */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
        let shopping_list = e.target.closest("li");
        let cart_list = e.target.closest("ul").querySelectorAll("li");
        let pay_money = document.getElementsByClassName("pay_money")[0];
        let cart_total_price = document.getElementsByClassName("cart_total_price")[0];
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        let cart_number = document.getElementsByClassName("cart_number")[0]
        if(confirm("確定刪除此商品??")){
            let target_price = e.target.previousElementSibling.querySelector("span").innerHTML;
            shopping_list.closest("li").classList.add("fade_out");
            setTimeout(function(){
                shopping_list.closest("li").remove()    
            },500);
            document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) - parseInt(target_price);
            let list_number = cart_list.length;
            console.log(list_number)
            document.getElementsByClassName("cart_number")[0].innerHTML =  parseInt(list_number) -1;


            // localStorage內刪除再更新
            let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
            let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
            let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

            tasks.forEach(function(task, i){
                if(this_id != task.item_id){
                updated_tasks.push(task);
                }
            });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
            

            if(cart_list.length == 1){
                setTimeout(function(){
                    inside_cart.style.display = "block";
                    pay_money.innerHTML = "商品一覽";
                    pay_money.href = "./shopping _page.html";
                    pay_money.previousElementSibling.remove();
                },500)

                let shopping_cart = document.getElementsByClassName("shopping_cart")[0];
                shopping_cart.lastElementChild.remove();
                
                // 清空localStorage
                localStorage.clear();
            }
        }
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_plus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_detail_price = e.target.closest("li").querySelector("span.cart_detail_price");
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
         
        e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) + 1;
        cart_detail_price.innerHTML = parseInt(cart_detail_price.innerHTML) + 490;
        document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) + 490;

        let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
        let this_number = e.target.closest("section").querySelector("input").value;
        let this_money = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
        let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

        tasks.forEach(function(task, i){
            if(this_id = task.item_id){
                task.item_number = this_number;
                task.item_price = this_money
                updated_tasks.push(task);
            }
            });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_minus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_detail_price = e.target.closest("li").querySelector("span.cart_detail_price");
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        if(in_cart_number.value > 1){
            e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) - 1 ;
            cart_detail_price.innerHTML = parseInt(cart_detail_price.innerHTML) - 490;
            document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) - 490;

            let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
            let this_number = e.target.closest("section").querySelector("input").value;
            let this_money = document.getElementsByClassName("cart_all_price")[0].innerHTML;
            let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
            let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

            tasks.forEach(function(task, i){
                if(this_id = task.item_id){
                    task.item_number = this_number;
                    task.item_price = this_money
                    updated_tasks.push(task);
                }
                });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
        }
        
    }
})
