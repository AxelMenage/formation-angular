import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class DataDurService {
  voitures: Voiture[] = [];
  constructor() {
    let v1 = new Voiture();
    v1.marque = "Peugeot";
    v1.modele = "208";
    v1.couleur = "rouge";
    this.voitures.push(v1);

    let v2 = new Voiture();
    v2.marque = "Citroen";
    v2.modele = "C3";
    v2.couleur = "bleue";

    this.voitures.push(v2);

    let v3 = new Voiture();
    v3.marque = "Peugeot";
    v3.modele = "208";
    v3.couleur = "rouge";

    this.voitures.push(v3);
  }

  getVoitures(): Promise<Voiture[]>{

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.voitures);
      }, 1000);
    });
  }

  createVoiture(): Voiture{
    return new Voiture();
  }

  updateVoiture(voitureOriginale: Voiture|null, voitureModifiee: Voiture): Promise<Voiture>{
    if(!voitureOriginale){
      this.voitures.push(voitureModifiee);
      return Promise.resolve(voitureModifiee);
    }
    Object.assign(voitureOriginale, voitureModifiee);
    return Promise.resolve(voitureOriginale);
  }
}
