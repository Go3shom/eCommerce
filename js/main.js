'use strict';

let ajaxCall = new XMLHttpRequest();
let allProducts = [];

// ajaxCall.open('GET', '../products.json', true);
ajaxCall.open('GET', 'https://fakestoreapi.com/products', true);
ajaxCall.send();



ajaxCall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        allProducts = JSON.parse(this.responseText);
        displayAllProducts();
    }
}


function displayAllProducts() {
    var card = ``;

    for (let i = 0; i < allProducts.length; i++) {
        card += `<div class="card">
        <div class="image-wrapper">
            <img src="${allProducts[i].image}" alt="">
        </div>
        <h3 class="title">
            ${allProducts[i].title}
        </h3>
        <span class="price">
        $${allProducts[i].price}
        </span>
        <span class="rating">
            ${allProducts[i].rating.rate}
        </span>
        <div class="add-to-cart">
            <a href="#" id="${allProducts[i].id}" class="button" onclick="addProduct(${allProducts[i].id})">
                Add To Cart
            </a>
        </div>
    </div>`;
    }
    document.getElementById('productsColumn').innerHTML = card;
}


// Local Storage & Cart Items
function addProduct(id) {
    let products = [];

    if (Window.localStorage.getItem('products')) {
        allProducts = JSON.parse(localStorage.getItem('products'));
    }

    allProducts.push({ 'products': id + 1 });
    localStorage.setItem('products', JSON.stringify(products));


    console.log(products);
}



// window.localStorage.getItem();
// window.localStorage.removeItem()
// window.localStorage.clear();









/**********************************************************************************************/