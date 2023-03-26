import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvAgustaComponent } from './mv-agusta.component';

describe('MvAgustaComponent', () => {
  let component: MvAgustaComponent;
  let fixture: ComponentFixture<MvAgustaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvAgustaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvAgustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
