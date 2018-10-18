import { Component, OnInit } from '@angular/core';
import { Voiture } from './models/voiture';
import { DataDurService } from './services/data-dur.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isServiceBusy = false;
  serviceIsBusySubscription!: Subscription;
  title = 'FirstApp';
  constructor(private service: DataDurService){

  }
  ngOnInit(){
    this.service.isBusyChange.subscribe(i=>{
      this.isServiceBusy = i;
    });
  }
  ngOnDestroy(){
    this.serviceIsBusySubscription.unsubscribe();
  }
}
