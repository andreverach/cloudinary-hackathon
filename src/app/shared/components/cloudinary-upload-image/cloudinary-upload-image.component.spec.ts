import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudinaryUploadImageComponent } from './cloudinary-upload-image.component';

describe('CloudinaryUploadImageComponent', () => {
  let component: CloudinaryUploadImageComponent;
  let fixture: ComponentFixture<CloudinaryUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudinaryUploadImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudinaryUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
