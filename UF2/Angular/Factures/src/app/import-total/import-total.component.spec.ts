import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTotalComponent } from './import-total.component';

describe('ImportTotalComponent', () => {
  let component: ImportTotalComponent;
  let fixture: ComponentFixture<ImportTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
