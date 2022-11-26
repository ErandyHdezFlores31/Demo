import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrecategoriaComponent } from './agrecategoria.component';

describe('AgrecategoriaComponent', () => {
  let component: AgrecategoriaComponent;
  let fixture: ComponentFixture<AgrecategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrecategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrecategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
