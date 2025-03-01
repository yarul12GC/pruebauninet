import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalilsComponent } from './detalils.component';

describe('DetalilsComponent', () => {
  let component: DetalilsComponent;
  let fixture: ComponentFixture<DetalilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
