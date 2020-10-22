import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioListaComponent } from './propietario-lista.component';

describe('PropietarioListaComponent', () => {
  let component: PropietarioListaComponent;
  let fixture: ComponentFixture<PropietarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
