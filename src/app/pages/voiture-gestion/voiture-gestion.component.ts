import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { DataDurService } from 'src/app/services/data-dur.service';

@Component({
  selector: 'app-voiture-gestion',
  templateUrl: './voiture-gestion.component.html',
  styleUrls: ['./voiture-gestion.component.css']
})
export class VoitureGestionComponent implements OnInit {

  voitures: Voiture[] = [];

  constructor(private service: DataDurService) { }

  ngOnInit() {
    this.service.getVoitures().then(vs => {
      this.voitures = vs;
    }).catch(()=>{
      console.log("Erreur dans le service.")
    });
  }

}
