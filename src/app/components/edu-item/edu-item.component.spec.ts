import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduItemComponent } from './edu-item.component';

describe('EduItemComponent', () => {
  let component: EduItemComponent;
  let fixture: ComponentFixture<EduItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
