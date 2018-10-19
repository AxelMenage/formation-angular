import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("data", JSON.stringify({a:1, b:2}));

    if(localStorage.getItem("data"))
      JSON.parse(localStorage.getItem("data")!);
  }

  promesseDe4=new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(4)
    }, 5000);
  });

}
