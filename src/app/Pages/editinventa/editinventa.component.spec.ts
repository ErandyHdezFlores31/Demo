import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinventaComponent } from './editinventa.component';

describe('EditinventaComponent', () => {
  let component: EditinventaComponent;
  let fixture: ComponentFixture<EditinventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
