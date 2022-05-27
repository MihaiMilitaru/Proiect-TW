let sedans=["audi a6", "audi a4", "audi a5", "audi a7", "audi a8", 
"mercedes s-class", "mercedes e-class", "mercedes c-class", 
"bmw 3-series", "bmw 4-series", "bmw 5-series", "bmw 6-series", "bmw 7-series",
"volvo s-60", "volvo s-90", 
"lexus ls", "lexus es 300h"];


let suvs=["audi q8", "audi q7",
"bmw x1", "bmw x2", "bmw x3", "bmw x4", "bmw x5", "bmw x6", "bmw x7",
"mercedes glb", "mercedes gls", "mercedes glc", "mercedes gle", "mercedes g-wagon",
"lexus nx 300h", "lexus rx",
"volvo xc90", "volvo xc60"];

let sedans_shuffle=sedans.sort((a,b) => 0.5 - Math.random());

let suvs_shuffle=suvs.sort((a,b) => 0.5 - Math.random());

let questions={
    "brand": ["mercedes", "audi", "bmw", "volvo", "lexus"],
    "type": ["sedan", "suv"]
}

let v=800;
document.getElementById("div_poza").addEventListener("click", select_random_car);

function select_random_car(){
   
    document.getElementById("div_poza").style.transform = "rotate(360deg)";
    document.getElementById("div_poza").style.transition = 'all 1s ease-in-out';
    

    let random_sedan=Math.floor(Math.random()*(sedans.length-1));
    let random_suv=Math.floor(Math.random()*(suvs.length-1));
    let random_choice=Math.floor(Math.random()*2)+1;

    let random_q1=Math.floor(Math.random()*4);
    let random_q2=Math.floor(Math.random()*2);

    let par=document.createElement("p");
    par.innerText="Give me a " + questions.brand[random_q1] + " " + questions.type[random_q2];
    document.body.append(par);

    let answ=document.createElement("p");
    if(random_choice==1){
        answ.innerText="Your hand: "+ sedans[random_sedan];
    }else{
        answ.innerText="Your hand: "+ suvs[random_suv];
    }
    document.body.append(answ);

    if(random_choice==1){
        if (sedans[random_sedan].split(' ')[0]==questions.brand[random_q1] && random_choice==random_q2+1){
            let res=document.createElement("p");
            res.innerText="Correct";
            document.body.append(res);
            res.style.color="green";
        }else{
            let res=document.createElement("p");
            res.innerText="Incorrect";
            document.body.append(res);
            res.style.color="red";
        }
    }else{
        if (suvs[random_suv].split(' ')[0]==questions.brand[random_q1] && random_choice==random_q2+1){
            let res=document.createElement("p");
            res.innerText="Correct";
            document.body.append(res);
            res.style.color="green";
            
        }else{
            let res=document.createElement("p");
            res.innerText="Incorrect";
            document.body.append(res);
            res.style.color="red";
            
        }
    }
    

    let space =document.createElement("br");
    document.body.append(space);
  setTimeout(function(){document.getElementById("div_poza").style = null;},v);
  v+=800;
}       
