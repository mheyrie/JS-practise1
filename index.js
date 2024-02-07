const cart = document.querySelector('.show-cart');
const addcart = document.querySelector('.add-to-cart');
const twoaddcart = document.querySelector('.increase-by-two');
const threeaddcart = document.querySelector('.increase-by-three');
const resetcart = document.querySelector('.reset-cart');

let cart_quantity = 0;

function cardQuantity(){ 
    console.log(`Cart Quantity: ${cart_quantity}`)
};

function AddToCart(){
    cart_quantity++
    console.log(`Cart Quantity: ${cart_quantity}`)
}

function AddTwoToCart(){
    cart_quantity = cart_quantity + 2
    console.log(`Cart Quantity: ${cart_quantity}`)
}

function AddThreeToCart(){
    cart_quantity = cart_quantity + 3
    console.log(`Cart Quantity: ${cart_quantity}`)
}

function ResetCart(){
    console.log("Cart was reset")
    cart_quantity = 0
    console.log(`Cart Quantity: ${cart_quantity}`)
}


cart.addEventListener('click', cardQuantity);
addcart.addEventListener('click', AddToCart)
twoaddcart.addEventListener('click', AddTwoToCart)
threeaddcart.addEventListener('click', AddThreeToCart)
resetcart.addEventListener('click', ResetCart)
