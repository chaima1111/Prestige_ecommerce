let women_proBtn = document.querySelectorAll(".show_more")
let women_pro = document.querySelectorAll(".product")
// console.log(productsWomen)
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
console.log('change_img: ', change_img);
let change_imgArr =  document.querySelectorAll(".chosen_img")
console.log('change_imgArr: ', change_imgArr);

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

