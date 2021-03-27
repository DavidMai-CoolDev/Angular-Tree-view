import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaggingExampleComponent } from './pagging-example.component';

describe('PaggingExampleComponent', () => {
  let component: PaggingExampleComponent;
  let fixture: ComponentFixture<PaggingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaggingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaggingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
