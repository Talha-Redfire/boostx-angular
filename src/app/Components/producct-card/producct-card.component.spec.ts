import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducctCardComponent } from './producct-card.component';

describe('ProducctCardComponent', () => {
  let component: ProducctCardComponent;
  let fixture: ComponentFixture<ProducctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducctCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
