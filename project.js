// Products Array
const Products = [
    
    {
         id: 1,
        title: "Automn Hodie",
        image: "image/automn.jpg"
    },
    {
        id: 2,
       title: "Fasion Hodie",
       image: "image/fasion hoodie.WEBP"
   }
  
];
//get the product list and eliments
const productList = document.getElementById('productlist')
const cartItemsElement = document.getElementById('cartItems')
const cartTotalElement = document.getElementById('cartTotal')
//Store Cart Items In Local Storage
let cart =JSON.parse(localStorage.getItem('cart')) || [];
//Render Products on page
function renderProducts(){
    productList.innerHTML = Products
    .map(
        (product) => ` 
        <div class="product">
        <img src="${product.image}" alt="${product.title}" class="product-img">
       <div class="product-info">
       <h2 class="product-title">${product.title}</h2>
         <p class="product-price">${product.price.toFixed(2)} Tk</p>
         <a class="add-to-cart" data-id="${product.id}">See Project</a>
       </div> 
     </div>
     `)
     .join("");
}