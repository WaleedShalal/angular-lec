import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamadaComponent } from './hamada.component';

describe('HamadaComponent', () => {
  let component: HamadaComponent;
  let fixture: ComponentFixture<HamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
