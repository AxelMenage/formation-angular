import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VoitureItemComponent } from './controls/voiture-item/voiture-item.component';
import { VoitureListeComponent } from './controls/voiture-liste/voiture-liste.component';
import { DataDurService } from './services/data-dur.service';
import { VoitureEditComponent } from './controls/voiture-edit/voiture-edit.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoitureGestionComponent } from './pages/voiture-gestion/voiture-gestion.component';
import { VoituresComponent } from './pages/voitures/voitures.component';
import { VoitureDetailsComponent } from './pages/voiture-details/voiture-details.component';

const routes: Route[] = [
  {path: "", component: AccueilComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "voitures", component: VoitureGestionComponent},
  {path: "voituresnav", component: VoituresComponent},
  {path: "voiture/:id", component: VoitureDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VoitureItemComponent,
    VoitureListeComponent,
    VoitureEditComponent,
    AccueilComponent,
    VoitureGestionComponent,
    VoitureListeComponent,
    VoituresComponent,
    VoitureDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [{provide:DataDurService, useClass:DataDurService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
