import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirgolaComponent } from './girgola.component';

describe('GirgolaComponent', () => {
  let component: GirgolaComponent;
  let fixture: ComponentFixture<GirgolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirgolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirgolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
