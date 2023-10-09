/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PitaraContentboxComponent } from './pitara-contentbox.component';

describe('PitaraContentboxComponent', () => {
  let component: PitaraContentboxComponent;
  let fixture: ComponentFixture<PitaraContentboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitaraContentboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitaraContentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
