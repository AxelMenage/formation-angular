import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-voiture-item',
  templateUrl: './voiture-item.component.html',
  styleUrls: ['./voiture-item.component.css']
})
export class VoitureItemComponent implements OnInit {

  @Input()
  voitureAffichee!: Voiture;

  @Output()
  select = new EventEmitter<Voiture>();

  onSelect(){
    this.select.emit(this.voitureAffichee);
  }

  constructor(){

  }

  ngOnInit() {
  }

}
