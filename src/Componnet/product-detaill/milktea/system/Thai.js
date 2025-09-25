import { Product_mliktea } from "../../../../server/data.js";

let Receipt = JSON.parse(localStorage.getItem("Receipt")) || [];

const btn = document.getElementById("add-btn");

btn.addEventListener("click", () => {
    const item = Product_mliktea.find(p => p.name === "Thai Milk Tea" );

    if(item){
        Receipt.push(item);

        localStorage.setItem("Receipt",JSON.stringify(Receipt));

        window.location.href = "../../../Anim/cart.html";
    
    } else {
        alert("Item not found!");
    }
});