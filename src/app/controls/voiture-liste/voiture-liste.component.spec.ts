import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureListeComponent } from './voiture-liste.component';

describe('VoitureListeComponent', () => {
  let component: VoitureListeComponent;
  let fixture: ComponentFixture<VoitureListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
