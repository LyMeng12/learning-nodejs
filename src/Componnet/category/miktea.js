import { Product_mliktea } from "../../server/data.js";


const itemcoffe =document.getElementById("miktea-item")

Product_mliktea.map((p)=>{
    itemcoffe.innerHTML+=
    `
<div class="w-[30%] bg-amber-50 h-[400px] rounded-2xl flex flex-col overflow-hidden shadow-md hover:shadow-lg transition">
  <!-- Image -->
  <a href="../product-detaill/milktea/${p.link}" class="w-full h-[65%] block">
    <img class="rounded-t-2xl w-full h-full object-cover" src="../..${p.img}" alt="${p.name}">
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
      onclick="addToCart(${p.id})"><a href="../product-detaill/milktea/${p.link}">
      Chack
    </a></button>
  </div>
</div>

    `;
})