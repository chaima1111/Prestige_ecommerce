function getRandomNumberGreaterThan10() {
  return Math.floor(Math.random() * 10000000000) + 11; // Range: 11 to 100
} 
let productsWomen = [
    {"id":getRandomNumberGreaterThan10(),
    "img":"./assets/women/product5/Le-Dino-Lisse-Noir-01.jpg",
    "images":["./assets/women/product5/Le-Dino-Lisse-Noir-02.jpg ","../assets/women/product5/Le-Dino-Lisse-Noir-02.jpg"],
"name":"Le Mini Dalia Black Liégé",
"desc":"'Baguette' bag created in collaboration with Wendy Swan. Inspired by the Parisian and minimalist style of Wendy, this bag is constructed with 3 flexible gussets allowing a good capacity. Two shoulder straps for shoulder or cross-body carry. Optional short shoulder strap. XL smartphone compatible (ex iPhone 13 pro Max). Secure turnstile clasp, brass. Handmade in Italy.",
"price":440.00,
"color":[1,2,3],
},
    {"id":getRandomNumberGreaterThan10(),
    "img":"./assets/women/product4/Le-Dino-Lisse-Ivoire-01.jpg",
    "images":["../assets/women/product4/Le-Dino-Lisse-Ivoire-02.jpg ","../assets/women/product4/Le-Dino-Lisse-Ivoire-03.jpg"],
"name":"Le Mini Dalia Black Liégé",
"desc":"'Baguette' bag created in collaboration with Wendy Swan. Inspired by the Parisian and minimalist style of Wendy, this bag is constructed with 3 flexible gussets allowing a good capacity. Two shoulder straps for shoulder or cross-body carry. Optional short shoulder strap. XL smartphone compatible (ex iPhone 13 pro Max). Secure turnstile clasp, brass. Handmade in Italy.",
"price":440.00,
"color":[1,2,3],
},
    {"id":getRandomNumberGreaterThan10(),
    "img":"./assets/women/product3/Grand-Nova-Lisse-Ivoire-013.jpg",
    "images":["../assets/women/product3/Grand-Nova-Lisse-Ivoire-02.jpg","../assets/women/product3/Grand-Nova-Lisse-Ivoire-3.jpg"],
"name":"Le Mini Dalia Black Liégé",
"desc":"'Baguette' bag created in collaboration with Wendy Swan. Inspired by the Parisian and minimalist style of Wendy, this bag is constructed with 3 flexible gussets allowing a good capacity. Two shoulder straps for shoulder or cross-body carry. Optional short shoulder strap. XL smartphone compatible (ex iPhone 13 pro Max). Secure turnstile clasp, brass. Handmade in Italy.",
"price":380.00,
"color":[1,2,4],
},
    {"id":getRandomNumberGreaterThan10(),
    "img":"./assets/women/product6/Le-Mini-Dalia-Lisse-Ivoire-01.jpg",
    "images":["../assets/women/product6/Le-Mini-Dalia-Lisse-Ivoire-02.jpg ","../assets/women/product6/Le-Mini-Dalia-Lisse-Ivoire-03 .jpg"],
"name":"Le Mini Dalia Black Liégé",
"desc":"'Baguette' bag created in collaboration with Wendy Swan. Inspired by the Parisian and minimalist style of Wendy, this bag is constructed with 3 flexible gussets allowing a good capacity. Two shoulder straps for shoulder or cross-body carry. Optional short shoulder strap. XL smartphone compatible (ex iPhone 13 pro Max). Secure turnstile clasp, brass. Handmade in Italy.",
"price":380.00,
"color":[1,2,4],
},
];

let elementsContShow = document.querySelector(".elements_container-show")



for (let i = 0; i < productsWomen.length; i++) {
    create_show(productsWomen[i])
    console.log(productsWomen[i])
}


export function create_show(product) {
    let elemenContShow = document.createElement("div")
// elemenContShow.classList.add("element_container-show","show_hidden")
    elemenContShow.classList.add("element_container-show")
    elemenContShow.innerHTML = ` <div class="desc_product-images-gallery">
    <div class="desc_product-img">
            <img src=${product["img"]} alt="">
            <img class="images_product" src=${product["images"][0]} alt="">
            <img class="images_product" src=${product["images"][0]} alt="">
        </div>

    <div class="desc_product-img-main">
                    <img src=${product["img"]} alt="">
                </div>
    </div>
<!-- product info section -->
       <div class="product_info">
       <div class="desc_product-images-txt">
            <h3>${product["name"]}</h3>
            <div class="rating-price">
                <h6>$${product["price"]}.00</h6>
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
            <div class="color color${product["color"][0]}"></div>
            <div class=" color color${product["color"][1]}"></div>
            <div class="color color${product["color"][2]}"></div>
       </div>
       <div  class="desc_product-images-desc">
        <p>${product["desc"]}</p>
       </div>
       <div class="div_show_add_cart">
       <button class="show_add_cart">Add To CART</button>
    </div>
    </div>`;

    elementsContShow.appendChild(elemenContShow)
        
}

