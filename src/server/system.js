import { newItem, Products, banner } from './data.js';




// new Products
const NewItem =document.getElementById("new-Item");
newItem.map((n)=>{
    NewItem.innerHTML+=
    `
        <div class="max-w-md mx-auto  w-[30%] bg-white rounded-2xl shadow-lg overflow-hidden flex p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
            <!-- Product Image -->
            <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <img src="${n.img}" alt="Classic Milk Tea" class="w-full h-full object-cover">
            </div>

        <!-- Product Details -->
            <div class="ml-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">${n.name}</h3>
                    <p class="text-sm text-gray-500 mt-1">${n.description}</p>
                </div>

        <!-- Quantity and Price -->
                <div class="flex items-center justify-between mt-3">
                    <button class="text-lg bg-green-700 text-white font-bold px-5 rounded-sm hover:bg-amber-500 hover:text-green-700 transition-all ease-in-out duration-300">Buy</button>
                    <div class="text-lg font-bold text-gray-900">${n.price}$</div>
                </div>
            </div>
        </div>
    `;
});



// map category
const bannerCart = document.getElementById("banner-cart");
banner.map((bannerItem)=>{
    bannerCart.innerHTML+=
    `
    <div class="w-full px-5 lg:px-0 lg:w-[45%] py-10 group relative rounded-2xl color ">
                <a href="${bannerItem.link}" class="flex justify-center gap-20 px-10 items-center">
                    <!-- img -->
                    <div class="w-1/2 lg:h-[200px] py-10 hidden lg:flex ">
                        <img class="w-full h-full" src="${bannerItem.img}" alt="">
                    </div>
                    <!-- text -->
                    <div class="flex flex-col ">
                        <!-- name -->
                        <h1 class="text-5xl font-bold">${bannerItem.name}</h1>
                        <h1 class="text-xl font-light">${bannerItem.description}</h1>
                        <div class="absolute bg-green-500 transition-all duration-300 ease-in-out group-hover:bg-amber-400 text-white group-hover:text-green-600 px-5 py-3 hidden lg:flex rounded-xl lg:left-5 lg:top-5">
                            <h1 class="font-bold text-lg">${bannerItem.Qty}-Products</h1>
                        </div>
                        <div class="absolute bg-green-500 transition-all duration-300 ease-in-out group-hover:bg-amber-400 text-white group-hover:text-green-600 px-4 py-2 right-5 bottom-5 lg:hidden flex  rounded-xl ">
                            <h1 class="font-bold text-lg">${bannerItem.Qty}-Products</h1>
                        </div>
                    </div>
                </a>
            </div>
    `;
});