import { Injectable, InjectionToken, Inject } from '@angular/core';
import { ServiceBase } from './service-base.service';
import { Voiture } from '../models/voiture';

export const StockageServiceDBNameToken = new InjectionToken("StockageServiceDBNameToken");
@Injectable({
  providedIn: 'root'
})
export class StockageService extends ServiceBase{

  constructor(@Inject(StockageServiceDBNameToken) public name: string) {
    super();

  }
  _bdd!: IDBDatabase;
  get bdd(): Promise<IDBDatabase>{
    if(this._bdd) return Promise.resolve(this._bdd);
    return new Promise((resolve, reject)=>{
      var dbHandle = indexedDB.open(this.name, 1);
      dbHandle.onupgradeneeded=(event=>{
        //creaton base si elle n'existe pas
        var db = (event.target as any).result as IDBDatabase;
        var storeVoitures = db.createObjectStore("voitures",{keyPath: "id"/*, autoIncrement: true*/});
        storeVoitures.createIndex("marque", ["marque","modele"], {unique: false});
        this._bdd = db;
        resolve(db);
      });
      dbHandle.onsuccess=(event)=>{
        var db = (event.target as any).result as IDBDatabase;
        this._bdd = db;
        resolve(db);
      };
    })
  }

  createVoiture(): Voiture {
    throw new Error("Method not implemented.");
  }
  getVoiture(id: string): Promise<Voiture> {
    return new Promise((resolve, reject)=>{
      this.bdd.then((bdd)=>{
        var transaction = bdd.transaction("voitures", "readonly");
        var requete = transaction.objectStore("voitures").get(id);
        requete.onsuccess = (e)=>{
          resolve((e.target as any).result);
        };
        requete.onerror=(e)=>{
          reject((e.target as any).result);
        }
      })
    })
  }
  getVoitures(): Promise<Voiture[]> {
    throw new Error("Method not implemented.");
  }

  deleteVoiture(id: string): Promise<Voiture> {
    return new Promise((resolve, reject)=>{
      this.bdd.then((bdd)=>{
        var transaction = bdd.transaction("voitures", "readonly");
        var requete = transaction.objectStore("voitures").delete(id);
        requete.onsuccess = (e)=>{
          resolve((e.target as any).result);
        };
        requete.onerror=(e)=>{
          reject((e.target as any).result);
        }
      })
    })
  }

  updateVoiture(voitureModifiee: Voiture): Promise<Voiture> {
    return this.gereIsBusy(new Promise((resolve, reject)=>{
      this.bdd.then((bdd)=>{
        var transaction = bdd.transaction("voitures","readwrite");
        var rechercheVoiture = transaction.objectStore("voitures").get(voitureModifiee.id);
        rechercheVoiture.onsuccess = (event)=>{
          var voitureRecherchee = (event.target as any).result as Voiture;
          if(voitureRecherchee){
            transaction.objectStore("voitures").put(voitureModifiee);
          }
          else{
            transaction.objectStore("voitures").add(voitureModifiee);
          }
        }
        transaction.onerror = ()=>{
          reject(new Error("La transaction n'a pas abouti"));
        }
        transaction.oncomplete = () =>{
          resolve(voitureModifiee);
        }
      });
    }));
  }
}
