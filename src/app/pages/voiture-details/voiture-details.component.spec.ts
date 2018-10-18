import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDetailsComponent } from './voiture-details.component';

describe('VoitureDetailsComponent', () => {
  let component: VoitureDetailsComponent;
  let fixture: ComponentFixture<VoitureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
