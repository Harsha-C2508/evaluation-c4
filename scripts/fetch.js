let searchNews = async(query)=>{
    try{
        let res = await fetch(
            `https://masai-mock-api.herokuapp.com/news?q=${query}`
        );
        let data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    };
}

let append = (data,container)=>{
  data.forEach(({title,description,url})=>{
    let div = document.createElement("div");
    div.setAttribute("class","news");
    let img = document.createElement("img");
    img.src = url;

    let div1 = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.innerText = title;

    let p = document.createElement("p");
    p.innerText = description;
    div1.append(h3,p);

    div.append(img,div1);
    container.append(div);
})
localStorage.setItem("news",JSON.stringify(news));
}


export {searchNews,append};