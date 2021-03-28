import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectedExampleComponent } from './ng-selected-example.component';

describe('NgSelectedExampleComponent', () => {
  let component: NgSelectedExampleComponent;
  let fixture: ComponentFixture<NgSelectedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectedExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
