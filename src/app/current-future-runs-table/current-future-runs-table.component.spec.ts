import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFutureRunsTableComponent } from './current-future-runs-table.component';

describe('CurrentFutureRunsTableComponent', () => {
  let component: CurrentFutureRunsTableComponent;
  let fixture: ComponentFixture<CurrentFutureRunsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFutureRunsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFutureRunsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
