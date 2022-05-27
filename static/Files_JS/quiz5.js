function functie_adaugare(){  
       
    let new_first_name=document.getElementById("first_name");
    let new_last_name=document.getElementById("last_name");
    let new_birth_date=document.getElementById("birth_date");
    let new_fav_brand=document.getElementById("list_brands");

    let new_description1=document.getElementById("car_text1");
    let new_description2=document.getElementById("car_text2");
    let new_description3=document.getElementById("car_text3");

   
    let array_words1=new_description1.value.split(", ");
    let array_words2=new_description2.value.split(", ");
    let array_words3=new_description3.value.split(", ");
    // console.log(array_words);


    if(new_first_name.value=="" || new_last_name.value=="" || new_birth_date.value=="" || new_description1.value=="" || new_description2.value=="" || new_description3.value==""){
        if(array_words1.length<4 || array_words2.length<4 || array_words3.length<4){
            let parr=document.createElement("p");
            parr.innerText="Invalid data.";
            document.body.appendChild(parr);

            let t=3000;
            setTimeout(function(){parr.innerHTML = "";},t);
    
        }
    }else{
        let new_car1={
            "model": array_words1[0],
            "type": array_words1[1],
            "color": array_words1[2],
            "transmision": array_words1[3]
        }
    
        let new_car2={
            "model": array_words2[0],
            "type": array_words2[1],
            "color": array_words2[2],
            "transmision": array_words2[3]
        }
    
        let new_car3={
            "model": array_words3[0],
            "type": array_words3[1],
            "color": array_words3[2],
            "transmision": array_words3[3]
        }
    
        let new_client={
            "first_name": new_first_name.value,
            "last_name": new_last_name.value,
            "birthdate": new_birth_date.value,
            "fav_brand": new_fav_brand.value,
            "fav_models":[new_car1, new_car2, new_car3]
        }
    
        /*list_of_clients.push(new_client);*/
        
    new_client=JSON.stringify(new_client);
        /*setTimeout(function(){parr.innerHTML = "";},v);*/
      fetch("http://127.0.0.1:3000/game5.html/add_client",{
    method:"POST", headers:{
    "Content-Type":"application/json"},
    body:new_client,})
    } 
    

}



// bmw x5, suv, blue, automatic


let viewd=0;

function functie_show(){

    fetch("http://127.0.0.1:3000/game5.html/view_clients")
       .then((response)=>response.json())
       .then(function (clients){
        if(viewd==0){let table=document.createElement("table");
        let main_row=document.createElement("tr");
        
        let th1=document.createElement("th");
        th1.innerText="First name";
        
        let th2=document.createElement("th");
        th2.innerText="Last name";
        
        let th3=document.createElement("th");
        th3.innerText="Birthdate";
        
        let th4=document.createElement("th");
        th4.innerText="Favourite brand";
        
        let th5=document.createElement("th");
        th5.innerText="Favourite model 1";
        
        let th6=document.createElement("th");
        th6.innerText="Favourite model 2";
        
        let th7=document.createElement("th");
        th7.innerText="Favourite model 3";
        
        table.style.width="80%";
        table.style.border="2";
        main_row.appendChild(th1);
        main_row.appendChild(th2);
        main_row.appendChild(th3);
        main_row.appendChild(th4);
        main_row.appendChild(th5);
        main_row.appendChild(th6);
        main_row.appendChild(th7);
    
        table.appendChild(main_row);
        console.log(clients.length);
        viewd=1;
        for(let i=0;i<clients.length;i++){
    
            let row=document.createElement("tr");
    
            let fname=clients[i].first_name;
            let row_fname=document.createElement("th");
            row_fname.innerText=fname;
    
            let lname=clients[i].last_name;
            let row_lname=document.createElement("th");
            row_lname.innerText=lname;
    
            let bdate=clients[i].birthdate;
            let row_bdate=document.createElement("th");
            row_bdate.innerText=bdate;
    
            let fbrand=clients[i].fav_brand;
            let row_fbrand=document.createElement("th");
            row_fbrand.innerText=fbrand;
    
            row.appendChild(row_fname);
            row.appendChild(row_lname);
            row.appendChild(row_bdate);
            row.appendChild(row_fbrand);
    
            table.appendChild(row);
    
            let row_car1=document.createElement("th");
            row_car1.innerText=clients[i].fav_models[0].model + ", " + clients[i].fav_models[0].type + ", " + clients[i].fav_models[0].color + ", " + clients[i].fav_models[0].transmision;
    
            let row_car2=document.createElement("th");
            row_car2.innerText=clients[i].fav_models[1].model + ", " + clients[i].fav_models[1].type + ", " + clients[i].fav_models[1].color + ", " + clients[i].fav_models[1].transmision;
    
            let row_car3=document.createElement("th");
            row_car3.innerText=clients[i].fav_models[2].model + ", " + clients[i].fav_models[2].type + ", " + clients[i].fav_models[2].color + ", " + clients[i].fav_models[2].transmision;
    
            row.appendChild(row_car1);
            row.appendChild(row_car2);
            row.appendChild(row_car3);
    
        }
    
        document.body.appendChild(table);      
  
        }else{
            
            document.body.removeChild(document.getElementsByTagName("table")[0]);
    
            let table=document.createElement("table");
            let main_row=document.createElement("tr");
    
            let th1=document.createElement("th");
            th1.innerText="First name";
    
            let th2=document.createElement("th");
            th2.innerText="Last name";
    
            let th3=document.createElement("th");
            th3.innerText="Birthdate";
    
            let th4=document.createElement("th");
            th4.innerText="Favourite brand";
    
            let th5=document.createElement("th");
            th5.innerText="Favourite model 1";
    
            let th6=document.createElement("th");
            th6.innerText="Favourite model 2";
    
            let th7=document.createElement("th");
            th7.innerText="Favourite model 3";
    
            table.style.width="80%";
            table.style.border="2";
            main_row.appendChild(th1);
            main_row.appendChild(th2);
            main_row.appendChild(th3);
            main_row.appendChild(th4);
            main_row.appendChild(th5);
            main_row.appendChild(th6);
            main_row.appendChild(th7);
    
            table.appendChild(main_row);
            for(let i=0;i<clients.length;i++){
    
                let row=document.createElement("tr");
        
                let fname=clients[i].first_name;
                let row_fname=document.createElement("th");
                row_fname.innerText=fname;
        
                let lname=clients[i].last_name;
                let row_lname=document.createElement("th");
                row_lname.innerText=lname;
        
                let bdate=clients[i].birthdate;
                let row_bdate=document.createElement("th");
                row_bdate.innerText=bdate;
        
                let fbrand=clients[i].fav_brand;
                let row_fbrand=document.createElement("th");
                row_fbrand.innerText=fbrand;
        
                row.appendChild(row_fname);
                row.appendChild(row_lname);
                row.appendChild(row_bdate);
                row.appendChild(row_fbrand);
        
                table.appendChild(row);
        
                let row_car1=document.createElement("th");
                row_car1.innerText=clients[i].fav_models[0].model + ", " + clients[i].fav_models[0].type + ", " + clients[i].fav_models[0].color + ", " + clients[i].fav_models[0].transmision;
        
                let row_car2=document.createElement("th");
                row_car2.innerText=clients[i].fav_models[1].model + ", " + clients[i].fav_models[1].type + ", " + clients[i].fav_models[1].color + ", " + clients[i].fav_models[1].transmision;
        
                let row_car3=document.createElement("th");
                row_car3.innerText=clients[i].fav_models[2].model + ", " + clients[i].fav_models[2].type + ", " + clients[i].fav_models[2].color + ", " + clients[i].fav_models[2].transmision;
        
                row.appendChild(row_car1);
                row.appendChild(row_car2);
                row.appendChild(row_car3);
        
            }
        
            document.body.appendChild(table);
            
        }
           

    });

    

}

function functie_delete(){
    let id=document.getElementById("nr").value;
    fetch("http://127.0.0.1:3000/game5.html/delete_client/"+ id,{
    method:"DELETE",
    })
    .then(response => response.json())
    .then(result => {functie_show()})

}

function functie_update(){
    let id=document.getElementById("nr2").value;
    let fav_brand=document.getElementById("list_brands2").value;
    console.log(id, fav_brand);
    let trim = JSON.stringify({"fav_brand":fav_brand})
    fetch("http://127.0.0.1:3000/game5.html/update_client/"+ id,{
    method:"PUT", headers:{
    "Content-Type":"application/json"},
    body:trim,})
    .then(response => response.json())
    .then(result => {functie_show()})
}
    
