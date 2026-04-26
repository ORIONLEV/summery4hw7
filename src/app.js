import {products} from "./data";
import template  from "./products-template";




const list =  document.querySelector(".list")

console.log(template);

list.innerHTML = template({products})