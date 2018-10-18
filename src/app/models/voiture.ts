export class Voiture {
    id!: string;
    marque: string = "";
    modele = "";

    couleur: string|null = null;
    puissanceFiscale: number = 2;
    dateContruction: Date = new Date();
    moteur: any;

    constructor(){
      this.id = (
        function guid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
      )()
    }
}
