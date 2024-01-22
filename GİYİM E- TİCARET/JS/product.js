import product1 from "./glide.js";

function addToCart()
{
const buttons=document.getElementsByClassName("add-to-cart")
console.log(buttons)
}


let products = [];
async function productFunc() {
  addToCart();
    products = await localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    const productsContainer = document.getElementById("product-list");

    let results = "";
    products.forEach((item) => {
        results += `
        <li class="product-item glide__slide">
              <div class="product-image">
                <a href="#">
                  <img src={} class="img1" alt="">
                  <img src="img/products/product1/2.png" class="img2" alt="">
                </a>
              </div>
              <div class="product-info">
                <a href="$" class="product-title">Analogue Resin Strap</a>
                <ul class="product-star">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-half"></i>
                  </li>
                </ul>
                <div class="product-prices">
                  <strong>$108.00</strong>
                  <span>$165</span>
                </div>
                <span class="product-discount">-17%</span>
                <div class="product-links">
                  <button class="add-to-cart">
                    <i class="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i class="bi bi-heart-fill"></i>
                  </button>
                  <a href="#">
                    <i class="bi bi-eye-fill"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
            </li>
        
        `;
        product1();
    })

}

export default productFunc();