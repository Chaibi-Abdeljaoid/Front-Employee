import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDetaillesComponent } from './demande-detailles.component';

describe('DemandeDetaillesComponent', () => {
  let component: DemandeDetaillesComponent;
  let fixture: ComponentFixture<DemandeDetaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDetaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
