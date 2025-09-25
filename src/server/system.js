import { newItem, banner } from './data.js';

// export const cartLists=[];


const NewItem = document.getElementById("new-Item");


newItem.map((p)=>{
    const itemcart = document.createElement("div");
     itemcart.classList.add(
    "w-[30%]",
    "bg-amber-50",
    "h-[400px]",
    "rounded-2xl",
    "flex",
    "flex-col",
    "overflow-hidden",
    "shadow-md",
    "hover:shadow-lg",
    "transition"
  );
    itemcart.innerHTML+=
    `
  <!-- Image -->
  <a href="./src/Componnet/product-detaill/milktea${p.link}" class="w-full h-[65%] block">
    <img class="rounded-t-2xl w-full h-full object-cover" src="./src/${p.img}" alt="${p.name}">
  </a>

  <!-- Text & Button -->
  <div class="w-full relative h-[35%] font-bold px-5 py-5 flex flex-col justify-between">
    <div>
      <h2 class="text-lg text-gray-800">${p.name}</h2>
      <p class="text-sm text-gray-600">${p.description}</p>
      <div class="text-xl text-green-600 mt-2">$${p.price.toFixed(2)}</div>
    </div>
    
    <button 
      class="absolute right-5 bottom-5 transition-all duration-300 ease-in-out rounded-2xl text-white font-light hover:bg-green-900 px-5 py-3 bg-green-600"
      onclick="addToCart(${p.id})"><a href="./src/Componnet/product-detaill/milktea${p.link}">
      Add Cart
    </a></button>
  </div>


    `;
  NewItem.appendChild(itemcart)
})





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