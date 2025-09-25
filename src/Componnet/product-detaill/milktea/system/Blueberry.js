    // import { Receipts } from "../../../../Anim/cart.js";
    import { Product_mliktea } from "../../../../server/data.js";

    let Receipt = JSON.parse(localStorage.getItem("Receipt")) || [];

    const btn = document.getElementById("add-btn");

    btn.addEventListener("click", () => {
    const item = Product_mliktea.find(p => p.name === "Blueberry Milk Tea");
    
    if (item) {
        Receipt.push(item); // add item to Receipt array
        
        // Save Receipt to localStorage so cart.html can access it
        localStorage.setItem("Receipt", JSON.stringify(Receipt));
        
        // Navigate to cart.html
        window.location.href = "../../../Anim/cart.html";
    } else {
        alert("Item not found!");
    }
});
