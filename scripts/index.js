// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {searchNews,append} from "./fetch.js"
let search =(e)=>{
    if(e.key ==="Enter"){
        let query = document.getElementById("search_input").value;
        searchNews(query).then((data)=>{
            console.log(data);
            let container = document.getElementById("results");
            container.innerHTML = null;
        })
        window.location.href="./search.html"
    }
}
document.getElementById("search_input").addEventListener("keydown",search)

let side = document.getElementById("sidebar").Children;

let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${side}`
let box = document.getElementById("results");
let id;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    appendData(res.articles);
})
.catch(function(err){
console.log(err)
});
function appendData(articles){
    articles.forEach(function(el){
        let div = document.createElement("div");
        div.setAttribute("class","news");
        let img = document.createElement("img");
        img.src = el.url;

        let div1 = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText = el.title;

        let p = document.createElement("p");
        p.innerText = el.description;
        div1.append(h3,p);

        div.append(img,div1);
        box.append(div);
    });
}