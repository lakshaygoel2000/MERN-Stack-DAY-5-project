// console.log('GEC Start');

// function printPretty(){

//     console.log("prettyStart");
//     let ans = 2+3;
//     console.log(ans);
//     console.log('prettyend');
// }
// setTimeout(printPretty,10000);
// console.log('GEC End');

// const btn = document.getElementById('btn');
// btn.addEventListener('click',printPretty);

// console.log('START')
// const req = fetch("https://api.github.com/users/lakshaygoel2000");
// console.log(req);
// req.then(()=>console.log('fetched'));
// console.log('END')


console.log("start");
fetch("https://dummyjson.com/products/1").then((res)=> res.json()).then(json => console.log(json) );
console.log("end");
console.log(typeof"res");
console.log()

// console.log("start");
// const req = fetch("https://dummyjson.com/products/1")
// console.log(req);
// const res = req.then(res => res.json())
// console.log(req);
// res.then((data)=> console.log(data));
// .catch((err)=>{
//     console.log("Error occured in fetch API");
// })
// console.log("end");