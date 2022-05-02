// Ude Import export (MANDATORY)

import { navbar , sidebar } from "../components/navbar.js";
let a = document.querySelector("#navbar").innerHTML = navbar();
let b = document.querySelector("#sidebar").innerHTML = sidebar();

let data = JSON.parse(localStorage.getItem("news"))
console.log(data)

let box = document.querySelector("#detailed_news");

let div = document.createElement("div");

let imgdiv = document.createElement("div");
let img = document.createElement("img");
let title = document.createElement("h3");
let des = document.createElement("p");
imgdiv.append(img)
img.src = data.urlToImage
title.textContent = data.title
des.textContent = data.description

div.append(imgdiv, title ,des);
box.append(div);


