import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarImagenComponent } from './actualizar-imagen.component';

describe('ActualizarImagenComponent', () => {
  let component: ActualizarImagenComponent;
  let fixture: ComponentFixture<ActualizarImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarImagenComponent]
    });
    fixture = TestBed.createComponent(ActualizarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
