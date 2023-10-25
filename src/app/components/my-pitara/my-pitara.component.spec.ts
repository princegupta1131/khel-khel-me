import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPitaraComponent } from './my-pitara.component';

describe('MyPitaraComponent', () => {
  let component: MyPitaraComponent;
  let fixture: ComponentFixture<MyPitaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPitaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPitaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
