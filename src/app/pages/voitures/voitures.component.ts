import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { DataDurService } from 'src/app/services/data-dur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  voitures!: Voiture[];

  constructor(private service: DataDurService, private router: Router) { }

  ngOnInit() {
    this.service.getVoitures().then(vs => {
      this.voitures = vs;
    }).catch(()=>{
      console.log("Erreur dans le service.")
    });
  }

  goToVoiture(v: Voiture){
    this.router.navigateByUrl("/voiture/"+v.id);
  }

}
