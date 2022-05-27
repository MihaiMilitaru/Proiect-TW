let list_of_cars=["bmw 5-series", "mercedes gle", "audi a6", "audi a7", "porsche cayenne", "porsche panamera", "bmw x5", "audi a4", "mercedes cls", "mercedes g-wagon", "bmw x7", "audi a8", "bmw x6", "audi q7", "audi a5", "bmw 6-series", "audi a7", "mercedes e-class", "mercedes gls", "mercedes s-class", "bmw 3-series", "mercedes c-class", "mercedes glc"];

let p1=document.createElement("p");
    p1.id="empty_string";


function randomise(){
    // if(document.getElementsByTagName("p").length==3)
    //     document.body.removeChild(document.getElementById("empty_string"));
    let nr=Math.floor(Math.random()*(list_of_cars.length-1));
    while(nr == 0)
        nr=Math.floor(Math.random()*(list_of_cars.length-1));
    let new_list_of_cars=[];
    for(i=0;i<nr;i++){
        let r=Math.floor(Math.random()*nr);
        if(!new_list_of_cars.find(element => element == list_of_cars[r]))
            new_list_of_cars.push(list_of_cars[r]);
    }
    p1.innerText="";
    for(i=0;i<new_list_of_cars.length;i++){
        p1.innerText+="["+new_list_of_cars[i]+"]"+"  ";
    }
    document.getElementsByClassName("div1")[0].appendChild(p1);
}



let car_stack=[];
let p2=document.createElement("p");


function remove(){
    if(car_stack.length==0){
        p2.innerText="The stack is already empty.";
    }else{
        car_stack.pop();
        p2.innerText="";
        for(i=0;i<car_stack.length;i++){
            p2.innerText+=" [ "+car_stack[i]+" ] ";
        }
       
    }
    
}

function insert(){
    let nume = document.getElementById("name").value;
    if(p2.innerText=="The stack is already empty."){
       p2.innerText="";
    }
    car_stack.push(nume);
    p2.innerText+=" [ "+car_stack[car_stack.length-1]+" ] ";
    document.getElementsByClassName("div2")[0].appendChild(p2);
    
}



// Squid game mini-game

function reset_time(){
    window.localStorage.removeItem("maxTime");
}

function reset_green(){
    window.localStorage.removeItem("maxGreen");
}

function reset_all(){
    window.localStorage.clear();
}

let greendiv=document.getElementById("_green");
let reddiv=document.getElementById("_red");
// let color_grey=reddiv.style.backgroundColor;

    
let time,time2;
let MaxTime = window.localStorage.getItem("maxTime");
let green, green2;
let MaxGreen= window.localStorage.getItem("maxGreen");    


    
window.onload=function(){
    time = new Date().getTime();
    let green_lights_passed=0;
    let clr=1;
    let ok=0;
    let greseala = false;
    let interval = 0;

    while(ok<30000){
        if(ok >=30000) {
            clearTimeout(w);
        }else{
            const w = setTimeout(function(){
            if(document.getElementById("_red") != null && document.getElementById("_green")!= null){
                if(clr){
                document.getElementById("_red").style.backgroundColor="grey"; 
                document.getElementById("_green").style.backgroundColor="green";
                green_lights_passed++;    
                }
                else{
                document.getElementById("_green").style.backgroundColor="grey";
                document.getElementById("_red").style.backgroundColor="red";
                }
                clr = !clr;
                
            }},interval);  
              interval += 4000;
                ok++;
          

        }
        
    }
    onkeydown=function(event){
        let a = event.key;  
        if(document.getElementsByClassName("lights").length!=0){
            if (document.getElementById("_red").style.backgroundColor == "red"){
                greseala= true;
                time2 =  new Date().getTime();
            }
            else{
                let v=document.getElementById("div_bmw_move");
                if(v!=null){
                    if(a == 'w' || a=='W'){
                        v.style.top = (parseInt(window.getComputedStyle(v).top) - 10) + 'px';
                    }   
                        

                    if(a == 'a' || a=='A'){
                        v.style.left = (parseInt(window.getComputedStyle(v).left) - 10) + 'px';
                    }
                            
                        
                    if(a == 'd' || a=='D'){
                        v.style.left = (parseInt(window.getComputedStyle(v).left) + 10) + 'px';
                    }     
                    
                    if(a == 's' || a=='S'){
                        v.style.top = (parseInt(window.getComputedStyle(v).top) + 10) + 'px';
                    }
                }
            }
            if(greseala && ok != 40000){
                alert("moarte");
                ok=40000;
                document.body.removeChild(document.getElementById("div_bmw_move"));
                document.body.removeChild(document.getElementsByClassName("lights")[0]); 
                let calctime = Math.round(( (time2 - time)/1000 + Number.EPSILON) * 100) / 100;
                // MaxTime ? null : (MaxTime = calctime);
                if(MaxTime=='null'){
                    MaxTime=calctime;
                }
                // calctime > MaxTime ? (MaxTime = calctime) : null; 
                if(calctime>MaxTime){
                    MaxTime=calctime;
                }

                if(MaxGreen=='null'){
                    MaxGreen=green_lights_passed;
                }
                if(green_lights_passed>MaxGreen){
                    MaxGreen=green_lights_passed;
                }
              
                window.localStorage.setItem("maxTime",  MaxTime);
                let para = document.createElement('p');
                para.innerText = calctime + "seconds";
                document.body.appendChild(para);

                window.localStorage.setItem("maxGreen",  MaxGreen);
                let para2 = document.createElement('p');
                para2.innerText = green_lights_passed + " green lights survived";
                document.body.appendChild(para2);


                let par = document.createElement('p');
                par.innerText = "timpul maxim " + window.localStorage.getItem("maxTime") + " seconds";
                console.log(window.localStorage.getItem("maxTime"));
                document.body.appendChild(par);

                let par2 = document.createElement('p');
                par2.innerText = "maximum green lights survived in this game so far: " + window.localStorage.getItem("maxGreen");
                console.log(window.localStorage.getItem("maxGreen"));
                document.body.appendChild(par2);


            }
        }
    }   
}


