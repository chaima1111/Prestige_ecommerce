let women_proBtn = document.querySelectorAll(".show_more")
let women_pro = document.querySelectorAll(".product")

let search = document.querySelector(".link_search")
// let elemenContShow = document.querySelector(".element_container-show")

let elementsContShow = document.querySelector(".elements_container-show")

console.log(elementsContShow)
function searchShow(){
search.addEventListener("click", (e) => {
    if (e.target.classList.contains("link_search-icon")) {
        let inputSearch = document.createElement("input")
        inputSearch.classList.add("search_input")
        inputSearch.setAttribute("type", "text")
        search.appendChild(inputSearch)
    }
}, {once : true})
}
//change main image when mouse overing
function changeImg(products) {
    let image = document.querySelectorAll(".product_img")
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener("mouseover", (e) => {
            // console.log(products[i].parentElement)
            // location.href="../showPr.html"
            if (e.target.classList.contains("product_img")) {
                image[i].src=`${productsWomen[i]["images"][0]}`
            }
        })
        products[i].addEventListener("mouseout", (e) => {
            // console.log(products[i].parentElement)
            // location.href="../showPr.html"
            if (e.target.classList.contains("product_img")) {
                image[i].src=`${productsWomen[i]["img"]}`
                console.log('productsWomen: ', productsWomen[i]["images"][1]);
            }
        })
        
    }
}


function showDes(products) {
console.log("form pr ")
        for (let i = 0; i < products.length; i++) {
        
        products[i].addEventListener("click", function (e) {

            console.log('products[i].parentElement: ', products[i].parentElement);
            
                if (e.target.classList.contains("show_more")) {
                location.href = "../showPr.html"

            }
        })
    }

}
showDes(women_pro)

function create_show(product) {
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


changeImg(women_pro)

for (let i = 0; i < productsWomen.length; i++) {
create_show(productsWomen[i])
}
// create_show(productsWomen[0])
// create_show(productsWomen[2])
// 


// showDes(women_pro)


