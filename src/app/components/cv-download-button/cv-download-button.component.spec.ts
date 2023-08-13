import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDownloadButtonComponent } from './cv-download-button.component';

describe('CvDownloadButtonComponent', () => {
  let component: CvDownloadButtonComponent;
  let fixture: ComponentFixture<CvDownloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDownloadButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
