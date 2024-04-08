console.log("....APP Started.....")

// function callAPI(){
// fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c300cb7994254da6bb81dabe2dd6ebfb")
// .then((res)=>{
//     res.json().then((data) => {
//         console.log(data)
//       })

// })
// }

// callAPI();

function callAPI(){
fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c300cb7994254da6bb81dabe2dd6ebfb")
.then((res)=> res.json())
.then((data)=> renderUI(data))
}

// function renderUI(data){
//     const articles=data.articles;
//     const root =document.getElementById("root")
//     const ar=articles[0];
//     console.log(articles);
//     const div = document.createElement('div');
//     div.innerText = "data";
//     root.appendChild(div);
// }
 
function renderUI(data){
    const root =document.getElementById("root")
    //got the articles from data
    const articles = data.articles;
    console.log(articles);
    for(let i=0;i<articles.length;i++){
    //isngle articles from the arrticles array
    const ar= articles[i];
    //created parent div
    const div = document.createElement("div")
    div.setAttribute("class","newscard")
    const h3 = document.createElement("h3")
    h3.innerText = ar.title;
    const img = document.createElement("img")
    img.src = ar.urlToImage;
    const Readmore = document.createElement("a")
    Readmore.href = ar.url;
    Readmore.innerText="Readmore"
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(Readmore);
    root.appendChild(div);
    }
}
// renderUI();
callAPI();