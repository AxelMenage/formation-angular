import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nochange-detector',
  templateUrl: './nochange-detector.component.html',
  styleUrls: ['./nochange-detector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NochangeDetectorComponent implements OnInit {

  constructor(private changeDetection: ChangeDetectorRef) {

  }
  ngOnInit() {
    setInterval(() => {
      this.changeDetection.detectChanges();
    },10000);
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
