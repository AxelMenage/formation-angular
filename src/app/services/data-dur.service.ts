import { Injectable, EventEmitter } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class DataDurService {

  isBusyChange = new EventEmitter<boolean>();

  private _isBusy : boolean = false;
  public get isBusy() : boolean {
    return this._isBusy;
  }
  public set isBusy(v : boolean) {
    if(this._isBusy!=v){
      this._isBusy = v;
      this.isBusyChange.emit(v);
    }

  }


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
    this.isBusy = true;
    var promesse = new Promise<Voiture[]>((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.voitures);
      }, 1000);
    });

    return this.gereIsBusy(promesse);
  }

  getVoiture(id: string): Promise<Voiture>{
    var voiture = this.voitures.find(v=>v.id==id);
    if(voiture){
      return this.gereIsBusy(Promise.resolve(voiture));
    }
    return this.gereIsBusy(Promise.reject(new Error("Voiture non trouvée")));
  }

  createVoiture(): Voiture{
    return new Voiture();
  }

  updateVoiture(voitureModifiee: Voiture): Promise<Voiture>{
    var voitureOriginale = this.voitures.find(v=>v.id == voitureModifiee.id);
    if(!voitureOriginale){
      this.voitures.push(voitureModifiee);
      return this.gereIsBusy(Promise.resolve(voitureModifiee));
    }
    Object.assign(voitureOriginale, voitureModifiee);
    return this.gereIsBusy(Promise.resolve(voitureOriginale));
  }

  gereIsBusy<T>(promesse: Promise<T>): Promise<T>{
    this.isBusy=true;
    promesse.then(c=>{
      this.isBusy = false;
    }).catch(c=>{
      this.isBusy = false;
    });
    return promesse;
  }
}
