import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloquestionComponent } from './eloquestion.component';

describe('EloquestionComponent', () => {
  let component: EloquestionComponent;
  let fixture: ComponentFixture<EloquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EloquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
