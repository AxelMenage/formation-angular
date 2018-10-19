import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBase } from 'src/app/services/service-base.service';
import { Voiture } from 'src/app/models/voiture';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

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

  save(){
    var modifications = this.formGroup.value;
    Object.assign(this.voitureAffichee, modifications);
    this.service.updateVoiture(this.voitureAffichee!).then((v)=>{
      this.location.back();
    })
  }

  constructor(private route: ActivatedRoute, private service: ServiceBase, private location: Location) {}

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
