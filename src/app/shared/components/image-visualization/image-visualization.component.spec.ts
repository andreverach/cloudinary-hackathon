import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVisualizationComponent } from './image-visualization.component';

describe('ImageVisualizationComponent', () => {
  let component: ImageVisualizationComponent;
  let fixture: ComponentFixture<ImageVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
