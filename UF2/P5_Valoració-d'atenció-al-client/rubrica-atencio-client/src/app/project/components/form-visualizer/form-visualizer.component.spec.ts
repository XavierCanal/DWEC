import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisualizerComponent } from './form-visualizer.component';

describe('FormVisualizerComponent', () => {
  let component: FormVisualizerComponent;
  let fixture: ComponentFixture<FormVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
