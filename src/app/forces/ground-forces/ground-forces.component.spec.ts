import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundForcesComponent } from './ground-forces.component';

describe('GroundForcesComponent', () => {
  let component: GroundForcesComponent;
  let fixture: ComponentFixture<GroundForcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundForcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundForcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
