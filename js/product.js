let women_proBtn = document.querySelectorAll(".show_more")
let women_pro = document.querySelectorAll(".product")
// console.log(productsWomen)
let elementsContShow = document.querySelector(".elements_container-show")

 function create_show() {
    let elemenContShow = document.createElement("div")
// elemenContShow.classList.add("element_container-show","show_hidden")
elemenContShow.classList.add("element_container-show")
    elemenContShow.innerHTML = ` <div class="desc_product-images-gallery">
    <div class="desc_product-img">
             <img class="chosen_img"  src="./assets/women/product5/Le-Dino-Lisse-Noir-01.jpg" alt="">
            <img class="chosen_img" class="images_product" src="./assets/women/product5/Le-Dino-Lisse-Noir-02.jpg" alt="">
            <img class="chosen_img" class="images_product" src="./assets/women/product5/Le-Dino-Lisse-Noir-03.jpg" alt="">
        </div>

    <div class="desc_product-img-main">
                      <img src="./assets/women/product5/Le-Dino-Lisse-Noir-01.jpg" alt="" class="main_chose-img">
                </div>
    </div>
<!-- product info section -->
       <div class="product_info">
       <div class="desc_product-images-txt">
            <h3>Le Mini Dalia Black Liégé</h3>
            <div class="rating-price">
                <h6>$440.00</h6>
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
            <div class="color color1"></div>
            <div class=" color color2}"></div>
            <div class="color color3"></div>
       </div>
       <div  class="desc_product-images-desc">
        <p>Baguette' bag created in collaboration with Wendy Swan. Inspired by the Parisian and minimalist style of Wendy, this bag is constructed with 3 flexible gussets allowing a good capacity. Two shoulder straps for shoulder or cross-body carry. Optional short shoulder strap. XL smartphone compatible (ex iPhone 13 pro Max). Secure turnstile clasp, brass. Handmade in Italy.</p>
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
    
    change_imgArr[i].addEventListener("click", () => {
        if(i==1)
    change_img.src ="./assets/women/product5/Le-Dino-Lisse-Noir-02.jpg"
else
change_img.src ="./assets/women/product5/Le-Dino-Lisse-Noir-03.jpg"
    })    
}


function changeSelectedImg() {
    
}

// showDes(women_pro)

