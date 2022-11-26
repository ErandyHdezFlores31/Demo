import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarinventarioComponent } from './agregarinventario.component';

describe('AgregarinventarioComponent', () => {
  let component: AgregarinventarioComponent;
  let fixture: ComponentFixture<AgregarinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarinventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
