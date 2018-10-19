import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { ServiceBase } from 'src/app/services/service-base.service';

@Component({
  selector: 'app-voiture-gestion',
  templateUrl: './voiture-gestion.component.html',
  styleUrls: ['./voiture-gestion.component.css']
})
export class VoitureGestionComponent implements OnInit {

  voitures: Voiture[] = [];

  constructor(private service: ServiceBase) { }

  ngOnInit() {
    this.service.getVoitures().then(vs => {
      this.voitures = vs;
    }).catch(()=>{
      console.log("Erreur dans le service.")
    });
  }

}
