function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=us&key=N5JR243APX8QUZR3B787QMJEJ";

    fetch(url)
    .then((res)=> res.json())
    .then(renderUI);    
}

fetchAPI();
const root = document.getElementById("root");

function renderUI(data){
    console.log(data);
    const days= data.days;
    console.log(days);

    //Make heading rows
    const row = document.createElement("tr");
    const c1 = document.createElement("th");
    c1.innerText="Date";
    row.appendChild(c1);
    
    const c2 = document.createElement("th");
    c2.innerText="Maximum Temperature";
    row.appendChild(c2);
    
    const c3 = document.createElement( "th" );
    c3.innerText="Minimum Temperature";
    row.appendChild(c3);

    
    root.append(row);

    const childRow = document.createElement("Row");
    const ce1 = document.createElement("th");
    ce1.innerText="07-04-2024";
    childRow.appendChild(ce1);
    const ce2 = document.createElement("th");
    ce2.innerText="90 F";
    childRow.appendChild(ce2);
    const ce3 = document.createElement( "th" );
    ce3.innerText="Minimum Temperature";
    childRow.appendChild(ce3);

    root.appendChild(childRow);
}

renderUI();