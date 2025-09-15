import { Products } from "../../server/data.js";

const milkItem = document.getElementById("Milk-Item")

Products.forEach(category=>{
     if(category.category === "milkTea"){
        category.Product.forEach(item =>{
            milkItem.innerHTML+=
            `
            <div class="max-w-md mx-auto  w-[30%] bg-white rounded-2xl shadow-lg overflow-hidden flex p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
            <!-- Product Image -->
            <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <img src="${item.img}" alt="Classic Milk Tea" class="w-full h-full object-cover">
            </div>

        <!-- Product Details -->
            <div class="ml-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                    <p class="text-sm text-gray-500 mt-1">${item.description}</p>
                </div>

        <!-- Quantity and Price -->
                <div class="flex items-center justify-between mt-3">
                    <button class="text-lg bg-green-700 text-white font-bold px-5 rounded-sm hover:bg-amber-500 hover:text-green-700 transition-all ease-in-out duration-300">Buy</button>
                    <div class="text-lg font-bold text-gray-900">${item.price}$</div>
                </div>
            </div>
        </div>
            ` ;
        } )
    }
})