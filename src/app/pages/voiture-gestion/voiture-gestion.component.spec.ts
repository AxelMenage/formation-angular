import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureGestionComponent } from './voiture-gestion.component';

describe('VoitureGestionComponent', () => {
  let component: VoitureGestionComponent;
  let fixture: ComponentFixture<VoitureGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
