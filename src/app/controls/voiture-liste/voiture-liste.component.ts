import { Component, OnInit, Input, Output } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-voiture-liste',
  templateUrl: './voiture-liste.component.html',
  styleUrls: ['./voiture-liste.component.css']
})
export class VoitureListeComponent implements OnInit {

  @Input()
  voitures: Voiture[] = [];

  @Input()
  voitureSelectionnee!: Voiture;

  constructor(){

  }

  selectVoiture(v: Voiture){
    this.voitureSelectionnee = v;
  }

  ngOnInit() {
  }

}
