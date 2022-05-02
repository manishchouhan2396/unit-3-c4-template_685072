const Snews = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};


const append = (data, container) => {

    //console.log(data.articles[0].author)
    container.innerHTML = null;

    data.forEach(ele => {
        let div = document.createElement("div");
        div.addEventListener("click" , function(){
            localStorage.setItem("news" ,JSON.stringify(ele))
            window.location.href = "news.html";
        })

        let imgdiv = document.createElement("div");

        let pdiv = document.createElement("div")

        let img = document.createElement("img");

        imgdiv.append(img)
        let title = document.createElement("h3");
        let des = document.createElement("p");
        pdiv.append(title,des)

        img.src = ele.urlToImage
        title.textContent = ele.title
        des.textContent = ele.description

        div.append(imgdiv , pdiv)
        container.append(div)
    });

}
export { Snews, append };