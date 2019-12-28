import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGearComponent } from './single-gear.component';

describe('SingleGearComponent', () => {
  let component: SingleGearComponent;
  let fixture: ComponentFixture<SingleGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
