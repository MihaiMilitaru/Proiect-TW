function light(){
    let x =document.getElementsByClassName("nav-wrapper")[0];
    x.style.backgroundColor="#7777fa";

    let drp =document.getElementsByClassName("dropdown_models-content")[0];
    drp.style.backgroundColor="#7777fa";

    document.body.style.background="white";
    document.body.style.color="black";

    let tb =document.getElementsByTagName("table")[0];
    tb.style.color="black";
    tb.style.border="2px solid black";
    
    let rows=document.getElementsByTagName("tr");
    for(let i=0;i<rows.length;i++){
        rows[i].style.backgroundColor="white";
        rows[i].style.border="2px solid black";
    }

    let cells=document.getElementsByTagName("th");
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor="white";
        cells[i].style.border="2px solid black";
    }
}

function dark(){
    let x =document.getElementsByClassName("nav-wrapper")[0];
    x.style.backgroundColor="#2929b4";

    let drp =document.getElementsByClassName("dropdown_models-content")[0];
    drp.style.backgroundColor="#2929b4";

    document.body.style.background="black";
    document.body.style.color="white";

    let tb =document.getElementsByTagName("table")[0];
    tb.style.color="white";
    tb.style.border="1px solid rgb(231, 231, 231)";
    
    let rows=document.getElementsByTagName("tr");
    for(let i=0;i<rows.length;i++){
        rows[i].style.backgroundColor="black";
        rows[i].style.border="1px solid rgb(231, 231, 231)";
    }

    let cells=document.getElementsByTagName("th");
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor="black";
        cells[i].style.border="1px solid rgb(231, 231, 231)";
    }
}