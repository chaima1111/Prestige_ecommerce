let women_proBtn = document.querySelectorAll(".show_more")
let women_pro = document.querySelectorAll(".product")
let elementsContShow = document.querySelector(".elements_container-show")

const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
/********************creating description HTML************************** */
function create_show() {
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

//cart functions
let userCart = document.getElementById("userCart");
let cart = [];
let addToCartBtn = document.querySelectorAll(".product_add");
let productCart = document.querySelectorAll(".product");
let closeBtn = document.getElementById("closeBtn");


//***************************************CART*********************** */

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


//*****************************you may like section*************************

let mayLikeProd = document.querySelector(".may_like-products");

let realtedProd0 =JSON.parse(localStorage.getItem("realtedProd0"))

let realtedProd1 =JSON.parse(localStorage.getItem("realtedProd1"))

let realtedProd2 =JSON.parse(localStorage.getItem("realtedProd2"))
if(realtedProd0!==undefined)
addProduct(realtedProd0) 
addProduct(realtedProd1)
addProduct(realtedProd2)

let arrRellated = []
arrRellated.push(realtedProd0)
arrRellated.push(realtedProd1)
arrRellated.push(realtedProd2)


function addProduct (products){
        let imgProduct = document.createElement("img");
        let divProduct = document.createElement("div");
        let btnCont = document.createElement("div");
        let nameProduct =document.createElement("h3");
        let priceProducnt = document.createElement("h6");
        let more = document.createElement("button");

        let nameText =document.createTextNode(`${products.name}`);
        let priceText =document.createTextNode(`$${products.price}`);
        let moreTxt =document.createTextNode("show more");
        
        imgProduct.src= products.img;
        nameProduct.appendChild(nameText);
        priceProducnt.appendChild(priceText);
        more.appendChild(moreTxt);
        

        divProduct.setAttribute("class","product")
        divProduct.setAttribute("data-id",products.id)
        btnCont.setAttribute("class", "product_add")
        imgProduct.setAttribute("class","product_img")
        nameProduct.setAttribute("class","product_name")
        priceProducnt.setAttribute("class", "product_price")
        more.setAttribute("class", "show_more")
        

        divProduct.appendChild(imgProduct)
        divProduct.appendChild(nameProduct)
        divProduct.appendChild(priceProducnt)
        divProduct.appendChild(more)
        mayLikeProd.appendChild(divProduct)

}

let mayPrHover = document.querySelectorAll(".product")
console.log('mayPrHover: ', mayPrHover);

//change main image when mouse overing
function changeImg(products) {
    let image = document.querySelectorAll(".product_img")
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("product_img")) {
                image[i].src=`${arrRellated[i]["images"][0]}`
            }
        })
        products[i].addEventListener("mouseout", (e) => {
            if (e.target.classList.contains("product_img")) {
                image[i].src=`${arrRellated[i]["img"]}`
            }
        })
        
    }
}
changeImg(mayPrHover)

            let generalPr= JSON.parse(localStorage.getItem("WomanProducts"))
            console.log('generalPr: ', generalPr);

 function showDes1(products) {
        for (let i = 0; i < products.length; i++) {
        
        products[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("show_more")) {
                    localStorage.setItem('selectedProduct', JSON.stringify(generalPr[i]));
                    let realtedProd = generalPr[i].mayLike;
                    for (let j = 0; j < realtedProd.length; j++) {
                    localStorage.setItem(`realtedProd${j}`, JSON.stringify(generalPr[realtedProd[j]]));       
                    }
                    localStorage.setItem('selectedProduct', JSON.stringify(generalPr[i]));       
                    location.href = "../showPr.html"

            }
        })
    }

}
showDes1(mayPrHover)

