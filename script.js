let arr =[2,10,21,32];

// function printPretty(elem){
//     console.log(':',elem)

// }

// printPretty = (elem) =>{            //another way to call function 
//     console.log(':',elem)

// }
// function printArray(arr){   
//     for(let i=0;i<arr.length;i++){
//         printPretty(arr[i]);
//     }
//         //arr.forEach(console.log);
    
// }
// printArray(arr);

// arr.forEach((a,b,c) =>{             //for each function defines(number, index, array)
//     console.log(":",a,b,c);
// });


// arr.map((a,b,c) =>{             //map function defines(number, index, array)
//     console.log(":",a,b,c);
// });

// setTimeout(fn,time)

function printPretty(){
    console.log("Hello");
}
setTimeout(printPretty,2000);
