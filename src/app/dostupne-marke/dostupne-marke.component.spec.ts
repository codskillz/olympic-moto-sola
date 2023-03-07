import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostupneMarkeComponent } from './dostupne-marke.component';

describe('DostupneMarkeComponent', () => {
  let component: DostupneMarkeComponent;
  let fixture: ComponentFixture<DostupneMarkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostupneMarkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DostupneMarkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
