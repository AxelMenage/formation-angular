import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataDurService } from 'src/app/services/data-dur.service';
import { Voiture } from 'src/app/models/voiture';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit {

  voitureAffichee: Voiture | undefined;
  messageAlerte = "";
  isBusy = false;

  formGroup = new FormGroup({
    marque: new FormControl(''),
    modele: new FormControl('')
  })

  constructor(private route: ActivatedRoute, private service: DataDurService) {}

  ngOnInit() {
    this.route.params.subscribe(c => {
      var id = c.id;
      //this.isBusy = true;
      this.messageAlerte = "";
      this.voitureAffichee = undefined;
      this.service.getVoiture(id)
      .then(v=>{
        this.voitureAffichee = v;
        this.formGroup.patchValue(v);
      })
      .catch(err=>{
        this.messageAlerte = "Error";
        //this.isBusy = false;
      });
    })
  }

}
