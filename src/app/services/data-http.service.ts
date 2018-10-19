import { Injectable } from '@angular/core';
import { ServiceBase } from './service-base.service';
import { Voiture } from '../models/voiture';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHttpService extends ServiceBase{

  constructor(private httpClient: HttpClient) {
    super();
   }

  createVoiture(): Voiture {
    return new Voiture();
  }
  //on connait le type de données = on peut préciser le type dans l'appel
  getVoiture(id: string): Promise<Voiture> {
    return this.gereIsBusy(this.httpClient.get<Voiture>("http://localhost:3200/voiture/"+id)
    .toPromise());
  }
  //on ne connait pas le type des données = on convertit les objets récupérés
  getVoitures(): Promise<Voiture[]> {
    return this.gereIsBusy(this.httpClient.get("http://localhost:3200/voitures")
    .toPromise()
    .then(tab=>{
      return (tab as Array<any>).map(o=>{
        var v = this.createVoiture();
        Object.assign(v, o);
        return v;
      })
    }).then(tabvoiture =>{
      return tabvoiture;
    })
    );
  }
  updateVoiture(voitureModifiee: Voiture): Promise<Voiture> {
    return this.gereIsBusy(this.httpClient.post("http://localhost:3200/voitures/", voitureModifiee)
    .toPromise()
    .then(o=>{
      var v = this.createVoiture();
      Object.assign(v,o);
      return v;
    }));
  }
}
