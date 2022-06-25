import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingchartComponent } from './trendingchart.component';

describe('TrendingchartComponent', () => {
  let component: TrendingchartComponent;
  let fixture: ComponentFixture<TrendingchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
