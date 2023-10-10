import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitaraComponent } from './pitara.component';

describe('PitaraComponent', () => {
  let component: PitaraComponent;
  let fixture: ComponentFixture<PitaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
