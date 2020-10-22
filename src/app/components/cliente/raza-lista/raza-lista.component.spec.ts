import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaListaComponent } from './raza-lista.component';

describe('RazaListaComponent', () => {
  let component: RazaListaComponent;
  let fixture: ComponentFixture<RazaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
