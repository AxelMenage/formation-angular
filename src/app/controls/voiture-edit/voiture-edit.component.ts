import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { DataDurService } from 'src/app/services/data-dur.service';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {

  private _voitureEditee!: Voiture;

  @Output()
  voitureEditeeChange = new EventEmitter<Voiture>();

  @Input()
  @Output()
  public get voitureEditee(): Voiture{
    return this._voitureEditee;
  }
  public set voitureEditee(v: Voiture){
    if(this._voitureEditee!=v){
      this.voitureEditeeChange.emit(v);
      this._voitureEditee = v;
      this.cloneVoiture = this.service.createVoiture();
      Object.assign(this.cloneVoiture, v);
    }
  }

  constructor(private service: DataDurService) {

   }

  cloneVoiture!: Voiture;

  updateVoiture(){
    this.service.updateVoiture(this.voitureEditee, this.cloneVoiture).then(
      (c) => {this.voitureEditee=c}
    );

  }

  ngOnInit(){
    this.cloneVoiture = this.service.createVoiture();
  }
}
