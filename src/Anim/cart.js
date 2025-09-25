document.addEventListener("DOMContentLoaded", () => {
    // Load cart from localStorage
    let Receipt = JSON.parse(localStorage.getItem("Receipt")) || [];

    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    function displayReceipt() {
        cartContainer.innerHTML = "";

        if (Receipt.length === 0) {
            cartContainer.innerHTML = "<p class='text-gray-500'>Your cart is empty.</p>";
            return;
        }
        let total=0

        Receipt.forEach((item, index) => {
            total+=item.price;
            const itemDiv = document.createElement("div");
            itemDiv.className = "w-full flex justify-between items-center border-b py-2";

            itemDiv.innerHTML = `
                <div class="flex items-center gap-4">
                    <img src="../${item.img}" class="w-16 h-16 object-cover rounded" alt="${item.name}">
                    <div>
                        <h2 class="font-bold text-lg">${item.name}</h2>
                        <p class="text-gray-600">${item.description}</p>
                    </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                    <div class="text-right font-bold text-lg">$${item.price.toFixed(2)}</div>
                    <button class="remove-btn px-3 py-1 text-white bg-red-600 rounded hover:bg-red-800 transition">Remove</button>
                </div>
            `;

            // Add remove functionality
            const removeBtn = itemDiv.querySelector(".remove-btn");
            removeBtn.addEventListener("click", () => {
                // Remove item from array
                Receipt.splice(index, 1);
                // Update localStorage
                localStorage.setItem("Receipt", JSON.stringify(Receipt));
                // Refresh the cart display
                displayReceipt();
            });

            cartContainer.appendChild(itemDiv);
        });
        const totalDiv = document.createElement("div");
        totalDiv.className = "w-full flex justify-between items-center font-bold text-xl mt-4";
        totalDiv.innerHTML = `
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        `;
        cartContainer.appendChild(totalDiv);
    }
    displayReceipt();
});
