const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.json());

app.use("/static",express.static("./static"));
const StaticPath = path.join(__dirname,'views/Files.HTML');


app.get("/",(require,response)=>{
  response.render(path.join(StaticPath,'index'));
});
app.get("/index",(require,response)=>{
  response.render(path.join(StaticPath,'index'));
});
app.get("/audi.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'audi.html'))
})

app.get("/bmw.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'bmw.html'))
})

app.get("/mercedes.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'mercedes.html'))
})

app.get("/models.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'models.html'))
})

app.get("/eclass.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'eclass.html'))
})

app.get("/game3.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'game3.html'))
})


app.get("/game4.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'game4.html'))
})

app.get("/game5.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'game5.html'))
})

app.get("/game6.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'game6.html'))
})

app.get("/sign_in.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'sign_in.html'))
})

app.get("/sign_up.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'sign_up.html'))
})


app.get("/quiz.html",(require,response)=>{
  response.sendFile(path.join(StaticPath,'quiz.html'))
})

let clients=[{"first_name": "Mike",
"last_name": "John",
"birthdate": "12-02-2002",
"fav_brand": "BMW",
"fav_models":[{"model": "bmw x5",
"type": "suv",
"color": "blue",
"transmision": "automatic"}, {"model": "bmw x5",
"type": "suv",
"color": "blue",
"transmision": "automatic"}, {"model": "bmw x5",
"type": "suv",
"color": "blue",
"transmision": "automatic"}]}];

// let clients=[];

app.get("/game5.html/view_clients", (req,res)=>{
  res.send(JSON.stringify(clients));
})

app.post("/game5.html/add_client", (req,res)=>{
  let newClient;
  newClient={
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "birthdate": req.body.birthdate,
    "fav_brand": req.body.fav_brand,
    
    "fav_models": req.body.fav_models
      
   
  }
  console.log()

  clients.push(newClient);
  res.send(newClient);
})

app.delete("/game5.html/delete_client/:id", (req,res)=>{
  let f = parseInt(req.params.id);
  if(f>=0 && f<clients.length){
    clients.splice(f,1);
    res.send({msg: `Client deleted successfully.`, clients: clients});

  }else{
    res.send({msg:`Invalid ID.`})
  }

})


app.put("/game5.html/update_client/:id", (req,res)=>{
  let f = parseInt(req.params.id);
  
  if(f>=0 && f<clients.length){
    clients[f].fav_brand=req.body.fav_brand;
    res.send(clients);

  }else{
    res.send({msg:`Invalid ID.`})
  }

})


app.get("*",(require,response)=>{
  response.sendFile(path.join(StaticPath,'404error.html'))
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});