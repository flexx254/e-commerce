// ======================================
// BLUEMART LOCAL STORAGE DATABASE
// ======================================

if (!localStorage.getItem("products")) {

    const products = [

        {
            id:1,
            name:"iPhone 15 Pro",
            category:"Phones",
            price:165000,
            image:"assets/images/iphone.jpg",
            rating:5,
            stock:20
        },

        {
            id:2,
            name:"Samsung Galaxy S25",
            category:"Phones",
            price:145000,
            image:"assets/images/samsung.jpg",
            rating:5,
            stock:15
        },

        {
            id:3,
            name:"HP EliteBook",
            category:"Computers",
            price:98000,
            image:"assets/images/laptop.jpg",
            rating:4,
            stock:18
        },

        {
            id:4,
            name:"Sony Headphones",
            category:"Electronics",
            price:12000,
            image:"assets/images/headphones.jpg",
            rating:5,
            stock:40
        },

        {
            id:5,
            name:"Nike Sneakers",
            category:"Fashion",
            price:8500,
            image:"assets/images/shoes.jpg",
            rating:4,
            stock:35
        },

        {
            id:6,
            name:"Smart Watch",
            category:"Electronics",
            price:15000,
            image:"assets/images/watch.jpg",
            rating:5,
            stock:22
        },

        {
            id:7,
            name:"Office Chair",
            category:"Furniture",
            price:14500,
            image:"assets/images/chair.jpg",
            rating:4,
            stock:12
        },

        {
            id:8,
            name:"Coffee Maker",
            category:"Home",
            price:7600,
            image:"assets/images/coffee.jpg",
            rating:4,
            stock:25
        }

    ];

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}

// Create Cart

if(!localStorage.getItem("cart")){

    localStorage.setItem(
        "cart",
        JSON.stringify([])
    );

}

// Wishlist

if(!localStorage.getItem("wishlist")){

    localStorage.setItem(
        "wishlist",
        JSON.stringify([])
    );

}

// Orders

if(!localStorage.getItem("orders")){

    localStorage.setItem(
        "orders",
        JSON.stringify([])
    );

}

// Current User

if(!localStorage.getItem("currentUser")){

    localStorage.setItem(
        "currentUser",
        JSON.stringify({})
    );

}
