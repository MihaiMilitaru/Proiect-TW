function filtre_mercedes(){
    let parray=document.querySelectorAll("p");
    let card_array=document.getElementsByClassName("card");
    for(let i=0;i<card_array.length;i++){
        card_array[i].style.display="flex";
    }
    for(let i=0;i<parray.length;i++){
        let par=parray[i].textContent;
        // console.log(par);
        let brand=par.split(" ")[0];
        // console.log(brand);
        if(brand!="MERCEDES"){
            card_array[i].style.display="none";
        }
    }
}


function filtre_bmw(){
    let parray=document.querySelectorAll("p");
    let card_array=document.getElementsByClassName("card");
    for(let i=0;i<card_array.length;i++){
        card_array[i].style.display="flex";
    }
    for(let i=0;i<parray.length;i++){
        let par=parray[i].textContent;
        // console.log(par);
        let brand=par.split(" ")[0];
        // console.log(brand);
        if(brand!="BMW"){
            card_array[i].style.display="none";
        }
    }
}


function filtre_audi(){
    let parray=document.querySelectorAll("p");
    let card_array=document.getElementsByClassName("card");
    for(let i=0;i<card_array.length;i++){
        card_array[i].style.display="flex";
    }
    for(let i=0;i<parray.length;i++){
        let par=parray[i].textContent;
        // console.log(par);
        let brand=par.split(" ")[0];
        // console.log(brand);
        if(brand!="AUDI"){
            card_array[i].style.display="none";
        }
    }
}