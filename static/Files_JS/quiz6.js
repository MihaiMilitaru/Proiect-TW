function message(){
    alert("The model you selected looks great! Click on the name of it now!");
    
}

function show_x1(event){
    alert("That's a nice BMW X1!");
    event.stopPropagation();
}

function show_x2(event){
    alert("What a great BMW X2!");
    event.stopPropagation();
}

function show_x3(event){
    alert("Awesome BMW X3!");
    event.stopPropagation();
}

function show_x4(event){
    alert("This BMW X4 looks amazing!");
    event.stopPropagation();
}

function show_x5(event){
    alert("That's a huge luxury BMW X5!");
    event.stopPropagation();
}

function show_x6(event){
    alert("Love the new BMW X6!");
    event.stopPropagation();
}

function show_x7(event){
    alert("BMW X7 is the biggest SUV ever!");
    event.stopPropagation();
}


function validare(){
    let text=document.getElementById("numere").value;

    
    if(text.match(/\b([1-7])\b/)){
        
        onkeydown=function(event){
            let a=event.key;
            if(a==='Enter'){
                let nr=parseInt(text);
                let m=nr;
                // while(nr<=10){
                //     console.log(document.getElementById(nr));
                //     setTimeout(function(){
                //         document.getElementById(nr).remove();
                //     }, v);
                    
                //     nr+=m;
                //     v+=2000;
                // }

                setInterval(function(){
                    if(nr<=7){
                        let id="d"+ nr.toString();
                        document.getElementById(id).remove();
                        nr+=m;
                    }
                    
                }, 2000)
            }
    
        }
    }else{
        alert("input invalid");
    }
}
