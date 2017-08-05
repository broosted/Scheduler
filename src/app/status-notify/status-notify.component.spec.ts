import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNotifyComponent } from './status-notify.component';

describe('StatusNotifyComponent', () => {
  let component: StatusNotifyComponent;
  let fixture: ComponentFixture<StatusNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
