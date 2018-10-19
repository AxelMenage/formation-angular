const express = require("express");
const cors=require("cors");
var bodyParser=require("body-parser");
console.log("Démarrage");

var app = express();


const voitures=[
  {id:"1", marque:"Peugeot",modele:"208",dateCreation:new Date()},
  {id:"2", marque:"Peugeota",modele:"209",dateCreation:new Date()},
  {id:"3", marque:"Peugeoti",modele:"210",dateCreation:new Date()},
  {id:"4", marque:"Peugeotu",modele:"211",dateCreation:new Date()},
  {id:"5", marque:"Peugeoto",modele:"212",dateCreation:new Date()}
]

app.use(cors());
app.use(express.json());
app.get("/voitures", (req, res)=>{
  res.send(JSON.stringify(voitures));
});
app.get("/voiture/:id", (req, res)=>{
  console.log("get voiture");
  var id = req.params.id;
  var voiture = voitures.find(v=>v.id==id);
  res.send(JSON.stringify(voiture));
});
app.post("/voitures",(req, res)=>{
  var voiture = req.body;
  var voitureExistante = voitures.find(c=>c.id==voiture.id);
  if(voitureExistante){
    Object.assign(voitureExistante, voiture);
  }else{
    voitures.push(voiture);
  }
  res.send(JSON.stringify(voiture));
})
/*
app.use((req, res)=>{
  console.log("Une requete passe "+req.ip.toString());
})*/

app.listen(3200);
