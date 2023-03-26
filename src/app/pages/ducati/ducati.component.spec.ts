import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucatiComponent } from './ducati.component';

describe('DucatiComponent', () => {
  let component: DucatiComponent;
  let fixture: ComponentFixture<DucatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
