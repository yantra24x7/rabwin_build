import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancedashboardComponent } from './maintenancedashboard.component';

describe('MaintenancedashboardComponent', () => {
  let component: MaintenancedashboardComponent;
  let fixture: ComponentFixture<MaintenancedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
