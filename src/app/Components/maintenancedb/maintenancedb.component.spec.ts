import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancedbComponent } from './maintenancedb.component';

describe('MaintenancedbComponent', () => {
  let component: MaintenancedbComponent;
  let fixture: ComponentFixture<MaintenancedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancedbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
