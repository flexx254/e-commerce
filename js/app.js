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
