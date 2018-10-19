import { TestBed } from '@angular/core/testing';

import { StockageService, StockageServiceDBNameToken } from './stockage.service';
import { Voiture } from '../models/voiture';

describe('StockageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    //Paramétrage de l'injection de dépendances
    providers:[
      {provide: StockageServiceDBNameToken, useValue: "mabase"}
    ]
  }));

  it('should be created', (async(done) => {
    const service: StockageService = TestBed.get(StockageService);
    expect(service).toBeTruthy();
    expect(service.name).toBeTruthy();
    expect(service.name).toBe("mabase");


    await service.deleteVoiture("1");
    var v = await service.getVoiture("1");
    expect(v).toBeFalsy();
    await service.updateVoiture({id: "1", marque:"peugeot", modele: "208"} as Voiture);
    var v2 = await service.getVoiture("1");
    expect(v2.marque).toBe("Peugeot");
    done();
    /*
    service.deleteVoiture("1").then(()=>{
      service.updateVoiture({marque:"Peuget", modele:"108"} as Voiture).then((v)=>{
        expect(v).toBeTruthy();
        service.getVoiture("1").then(voitureSauvegardee =>{
          expect(voitureSauvegardee.marque).toBe("Peugeot");
        })
        done();
      })
    })*/
  }));
});
