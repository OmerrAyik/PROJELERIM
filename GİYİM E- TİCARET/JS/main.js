import header from "./header.js";
header();


import product from "./product.js";


// /*localStorage setItem  */
// const fruits = ["elma","armut","şeftali"];
// const fullName ="Emin Başbayan";
// localStorage.setItem("fullName",JSON.stringify(fullName));
// localStorage.setItem("meyveler",JSON.stringify(fruits));

// /*LocalStorage GetItem*/
// const getData =JSON.parse( localStorage.getItem("fullName"));
// const getData2=JSON.parse( localStorage.getItem("meyveler")); 

// console.log(getData);
// console.log( getData2);

//! add product to localstorage from data json
//asenkron sırasına alır ve sıralar

async function getData() {
  const photos = await fetch("../JS/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");
console.log(JSON.parse(products));










