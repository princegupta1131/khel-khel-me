import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePitaraComponent } from './create-pitara.component';

describe('CreatePitaraComponent', () => {
  let component: CreatePitaraComponent;
  let fixture: ComponentFixture<CreatePitaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePitaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePitaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
