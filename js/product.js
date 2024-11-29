let women_proBtn = document.querySelectorAll(".show_more")
let women_pro = document.querySelectorAll(".product")
let elementsContShow = document.querySelector(".elements_container-show")

function create_show() {
      const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
   if (!selectedProduct) return;
    let elemenContShow = document.createElement("div")
// elemenContShow.classList.add("element_container-show","show_hidden")
elemenContShow.classList.add("element_container-show")
    elemenContShow.innerHTML = ` <div class="desc_product-images-gallery">
    <div class="desc_product-img">
             <img class="chosen_img"  src=${selectedProduct.img} alt="">
            <img class="chosen_img" src=${selectedProduct.images[0]} alt="">
            <img class="chosen_img" src=${selectedProduct.images[1]} alt="">
        </div>

    <div class="desc_product-img-main">
                      <img src=${selectedProduct.img} alt="" class="main_chose-img">
                </div>
    </div>
<!-- product info section -->
       <div class="product_info">
       <div class="desc_product-images-txt">
            <h3>${selectedProduct.name}</h3>
            <div class="rating-price">
                <h6>$${selectedProduct.price.toFixed(2)}</h6>
                <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
            </div>
       </div>
       <!-- <hr> -->
       <div class="product_colors">
            <div class="color color${selectedProduct.color[0]}"></div>
            <div class=" color color${selectedProduct.color[1]}"></div>
            <div class="color color${selectedProduct.color[2]}"></div>
       </div>
       <div  class="desc_product-images-desc">
        <p>${selectedProduct.desc}</p>
       </div>
       <div class="div_show_add_cart">
       <button class="show_add_cart">Add To CART</button>
    </div>
    </div>`;
    elementsContShow.appendChild(elemenContShow)
        
}

create_show()

let change_img =  document.querySelector(".main_chose-img")

let change_imgArr =  document.querySelectorAll(".chosen_img")


for (let i = 0; i < change_imgArr.length; i++) {
          const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    change_imgArr[i].addEventListener("click", () => {
        if(i==1)
    change_img.src =selectedProduct.images[0]
else if(i==2)
            change_img.src = selectedProduct.images[1]
        else
             change_img.src = selectedProduct.img
    })    
}


function changeSelectedImg() {
    
}

// showDes(women_pro)
let userCart = document.getElementById("userCart");
let cart = [];
let addToCartBtn = document.querySelectorAll(".product_add");
let productCart = document.querySelectorAll(".product");
let closeBtn = document.getElementById("closeBtn");


//chech if there is products in localstorage

cart =JSON.parse(localStorage.getItem("cart"))

let showBtn = document.querySelector(".show_add_cart")

closeBtn.addEventListener('click',hideCart);
getDataLocalStr()
function getDataLocalStr() {
    let data = window.localStorage.getItem("cart");
    if (data) {
        //array has data in local storage
        let arr = JSON.parse(data) 
        updateCart(arr)
    }
}
function addCart() {
          const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
          console.log('selectedProduct: ', selectedProduct);

        showBtn.addEventListener('click', () => {
            //verify if the element already exist
            const findItem = cart.find(item => item.id == selectedProduct.id);
            const findItemBool = cart.find(item => item.id == selectedProduct.id) !== undefined ? true : false;
            console.log('cart: ', cart);
            console.log('findItem: ', findItem);
            if (findItemBool) {
                findItem.quantity += 1;
            } else {
                
                let id = selectedProduct.id
                let img = selectedProduct.img
                let name = selectedProduct.name;
                let price = selectedProduct.price
                cart.push({
                    id,
                    img,
                    name,
                    price,
                    quantity: 1,
                })
            
            }
            addDataToLocalSFrom(cart)
            updateCart(cart)
            showCart()
        })

    }
addCart()


    
showBtn.onclick = () => {
    updateCart(cart)
    showCart()
}

function showCart() {
    userCart.classList.add('show');
}

function hideCart() {
    userCart.classList.remove('show');
}
//removing cart if i click outside
window.addEventListener('click', (e) => {
    if (e.target === userCart) {
        hideCart();
    }
});

function updateCart(cart) {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
    }else{
    cartItems.innerHTML= cart.map(item=>`        
        <div class="user_cart-item" data-id=${item.id}>
            <div>
                 <img src="${item.img}" class ="cart_img" alt="">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                </div>
                <div>  
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                        class="remove-item remove_pro" 
                        aria-label="Remove item" data-id=${item.id} >Remove</button>
            </div>
           <hr>
        </div>  `).join('');

    
    }


    const total = cart.reduce((sum,item)=>{return sum+(item.price * item.quantity)},0)
    cartTotal.textContent = total.toFixed(2);
 let items = document.getElementsByClassName("user_cart-item")
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            removeFromCart(e.target.parentElement.parentElement.getAttribute("data-id"))        
            e.target.parentElement.parentElement.remove()
        }
    })
}
}
function removeFromCart(id) {

    cart = cart.filter((item) => {
        return item.id !=id
    });
    updateCart(cart);
   addDataToLocalSFrom(cart)
}
function addDataToLocalSFrom(cart) {
    window.localStorage.setItem("cart",JSON.stringify(cart))
}