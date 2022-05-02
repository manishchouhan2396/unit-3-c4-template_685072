// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, sidebar } from "../components/navbar.js";
let a = document.querySelector("#navbar").innerHTML = navbar();
let b = document.querySelector("#sidebar").innerHTML = sidebar();

import { Snews, append } from "./fetch.js";

const search = async (e) => {
    if (e.key === "Enter") {
        const query = document.querySelector("#search_input").value;

        const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

        const container = document.querySelector("#results");

        const data = await Snews(url);

        append(data.articles, container);

        console.log(data)
        //window.location.href="search.html"
    }
}

document.querySelector("#search_input").addEventListener("keydown", search)




let categories = document.getElementById("sidebar").children;

for (let el of categories) {
    el.addEventListener('click', cSearch);
}

function cSearch() {

    let country = document.querySelector("#sidebar").value;

    let api = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`;
    console.log(this.id);
    console.log(api);

    Snews(api).then((data) => {
        console.log(data.articles)
        const container = document.querySelector("#results");
        append(data.articles , container);
    });
}

// function append1(data){
//     console.log(data)

//     data.forEach(ele => {
//         let div = document.createElement("div");
//         div.addEventListener("click" , function(){
//             localStorage.setItem("news" ,JSON.stringify(ele))
//             window.location.href = "news.html";
//         })

//         let imgdiv = document.createElement("div");

//         let pdiv = document.createElement("div")

//         let img = document.createElement("img");

//         imgdiv.append(img)
//         let title = document.createElement("h3");
//         let des = document.createElement("p");
//         pdiv.append(title,des)

//         img.src = ele.urlToImage
//         title.textContent = ele.title
//         des.textContent = ele.description

//         div.append(imgdiv , pdiv)
//         container.append(div)
//     });
// }


