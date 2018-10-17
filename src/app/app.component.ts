import { Component, OnInit } from '@angular/core';
import { Voiture } from './models/voiture';
import { DataDurService } from './services/data-dur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FirstApp';
  constructor(){
  }

  ngOnInit(){

  }
}
