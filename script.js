// ===== MH Drip Co Cart System =====

// Cart storage
let cartCount = 0;
let cartItems = [];

// Get cart display element
const cartDisplay = document.getElementById("cartCount");

// Add product to cart
function addToCart(productName, price) {
    cartCount++;

    cartItems.push({
        name: productName,
        price: price
    });

    updateCartUI();

    alert(`${productName} added to cart 💖`);
}

// Update cart number in navbar
function updateCartUI() {
    cartDisplay.innerText = cartCount;
}

// Show cart items in console (simple version)
function viewCart() {
    console.log("🛍 Your Cart:");
    cartItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
}

// Optional: clear cart
function clearCart() {
    cartItems = [];
    cartCount = 0;
    updateCartUI();
    alert("Cart cleared 💔");
}