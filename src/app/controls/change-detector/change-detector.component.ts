import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.css']
})
export class ChangeDetectorComponent implements OnInit {

  constructor(private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
  }

  detach(){
    this.changeDetection.detach();
  }

  @Input()
  name!:string;

  nombreDoCheck = 0;

  ngDoCheck(){
    this.nombreDoCheck++;
  }

  clicke(){

  }

}
