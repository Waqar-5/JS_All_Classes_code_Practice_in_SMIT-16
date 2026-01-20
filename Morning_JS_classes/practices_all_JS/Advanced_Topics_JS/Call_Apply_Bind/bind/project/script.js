// Define users with their discount percentages
const user1 = { name: "Waqar", discount: 0.10 }; // 10%
const user2 = { name: "Ali", discount: 0.20 };   // 20%
const user3 = { name: "Sara", discount: 0.15 };  // 15%

// Generic function to calculate discounted price
function applyDiscount(price) {
    const final = price - (price * this.discount);
    return `${this.name} pays $${final.toFixed(2)} (Discount: ${this.discount*100}%)`;
}

// Create bound functions for each user
const discountWaqar = applyDiscount.bind(user1);
const discountAli = applyDiscount.bind(user2);
const discountSara = applyDiscount.bind(user3);

// Event listeners
document.getElementById("user1").addEventListener("click", () => {
    const price = Number(document.getElementById("productPrice").value) || 0;
    document.getElementById("finalPrice").textContent = discountWaqar(price);
});

document.getElementById("user2").addEventListener("click", () => {
    const price = Number(document.getElementById("productPrice").value) || 0;
    document.getElementById("finalPrice").textContent = discountAli(price);
});

document.getElementById("user3").addEventListener("click", () => {
    const price = Number(document.getElementById("productPrice").value) || 0;
    document.getElementById("finalPrice").textContent = discountSara(price);
});
