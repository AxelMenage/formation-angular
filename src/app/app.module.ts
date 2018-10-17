import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VoitureItemComponent } from './controls/voiture-item/voiture-item.component';
import { VoitureListeComponent } from './controls/voiture-liste/voiture-liste.component';
import { DataDurService } from './services/data-dur.service';
import { VoitureEditComponent } from './controls/voiture-edit/voiture-edit.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoitureGestionComponent } from './pages/voiture-gestion/voiture-gestion.component';

const routes: Route[] = [
  {path: "", component: AccueilComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "voitures", component: VoitureGestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VoitureItemComponent,
    VoitureListeComponent,
    VoitureEditComponent,
    AccueilComponent,
    VoitureGestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [{provide:DataDurService, useClass:DataDurService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
