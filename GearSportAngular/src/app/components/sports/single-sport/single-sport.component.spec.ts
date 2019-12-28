import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSportComponent } from './single-sport.component';

describe('SingleSportComponent', () => {
  let component: SingleSportComponent;
  let fixture: ComponentFixture<SingleSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
