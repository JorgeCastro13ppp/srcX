import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampinonComponent } from './champinon.component';

describe('ChampinonComponent', () => {
  let component: ChampinonComponent;
  let fixture: ComponentFixture<ChampinonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampinonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampinonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
