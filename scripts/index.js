// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar , sidebar } from "../components/navbar.js";
let a = document.querySelector("#navbar").innerHTML = navbar();
let b = document.querySelector("#sidebar").innerHTML = sidebar();

import { Snews , append} from "./fetch.js";

const  search = async (e) =>{
    if(e.key === "Enter"){
        const query = document.querySelector("#search_input").value;

        const  url  =`https://masai-mock-api.herokuapp.com/news?q=${query}`;

        const container = document.querySelector("#results");

        const data = await Snews(url);

        append(data.articles , container);

        console.log(data)
        //window.location.href="search.html"
    }
}

document.querySelector("#search_input").addEventListener("keydown" , search)

let country = document.querySelector("#sidebar")

let api = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;

let categories=document.getElementById("sidebar").children;

for(let el of categories){
    el.addEventListener('click',cSearch);
}

function cSearch(){
    console.log("madhu",this.id);

    Snews(api).then((data)=>{
        console.log(data)
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data,container);
    });


}

