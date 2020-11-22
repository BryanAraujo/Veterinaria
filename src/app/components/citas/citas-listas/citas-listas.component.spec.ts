import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasListasComponent } from './citas-listas.component';

describe('CitasListasComponent', () => {
  let component: CitasListasComponent;
  let fixture: ComponentFixture<CitasListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
