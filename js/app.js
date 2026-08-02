// =====================================
// BLUEMART APP.JS
// =====================================

// Get products from localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

const productGrid = document.querySelector(".product-grid");

// Display products
function displayProducts() {

    productGrid.innerHTML = "";

    products.forEach(product => {

        productGrid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div style="color:#FFC107;font-size:18px;">
                    ${"★".repeat(product.rating)}
                </div>

                <div class="price">
                    KSh ${product.price.toLocaleString()}
                </div>

                <button onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>

            </div>

        </div>

        `;

    });

}

// Add to Cart
function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart.");

}

// Update Cart Counter
function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartText = document.querySelector(".fa-cart-shopping")
        .parentElement
        .querySelector("span");

    cartText.innerHTML = "Cart (" + cart.length + ")";

}

// Search Products
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(keyword) ||

        product.category.toLowerCase().includes(keyword)

    );

    productGrid.innerHTML = "";

    filtered.forEach(product => {

        productGrid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div style="color:#FFC107;font-size:18px;">
                    ${"★".repeat(product.rating)}
                </div>

                <div class="price">
                    KSh ${product.price.toLocaleString()}
                </div>

                <button onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>

            </div>

        </div>

        `;

    });

});

// Load Page
displayProducts();

updateCartCount();


// ======================
// HERO SLIDER
// ======================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

document.querySelector(".next").onclick=function(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

document.querySelector(".prev").onclick=function(){

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    showSlide(currentSlide);

}

setInterval(function(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},5000);
