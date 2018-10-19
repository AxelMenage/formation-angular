import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, Route, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { VoitureItemComponent } from './controls/voiture-item/voiture-item.component';
import { VoitureListeComponent } from './controls/voiture-liste/voiture-liste.component';
import { DataDurService } from './services/data-dur.service';
import { VoitureEditComponent } from './controls/voiture-edit/voiture-edit.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoitureGestionComponent } from './pages/voiture-gestion/voiture-gestion.component';
import { VoituresComponent } from './pages/voitures/voitures.component';
import { VoitureDetailsComponent } from './pages/voiture-details/voiture-details.component';
import { ServiceBase } from './services/service-base.service';
import { DataHttpService } from './services/data-http.service';
import { HighlightDirective } from './directives/highlight.directive';
import { NullPipe } from './pipes/null.pipe';
import { ChangeDetectorComponent } from './controls/change-detector/change-detector.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { NochangeDetectorComponent } from './controls/nochange-detector/nochange-detector.component';
import { RandomGuard } from './guards/random.guard';
import { StockageServiceDBNameToken } from './services/stockage.service';

const routes: Route[] = [
  {path: "", component: AccueilComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "voitures", component: VoitureGestionComponent},
  {path: "voituresnav", component: VoituresComponent},
  {path: "voiture/:id", component: VoitureDetailsComponent},
  {path: "changes", component: ChangeDetectionComponent, canActivate: [RandomGuard]}
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
    VoitureDetailsComponent,
    HighlightDirective,
    NullPipe,
    ChangeDetectorComponent,
    ChangeDetectionComponent,
    NochangeDetectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    {provide: StockageServiceDBNameToken, useValue: "mabase"},
    {provide:ServiceBase, useClass:DataHttpService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
