import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryInstanceService } from '../../../core/services/cloudinary-instance.service';

@Component({
  selector: 'app-image-visualization',
  standalone: true,
  imports: [CloudinaryModule],
  templateUrl: './image-visualization.component.html',
  styleUrl: './image-visualization.component.scss',
})
export class ImageVisualizationComponent implements OnInit {
  cloudinaryImage!: CloudinaryImage;
  imagePublicId = input<string>();
  private readonly cloudinaryInstanceService = inject(
    CloudinaryInstanceService
  );
  cloudinaryInstance = this.cloudinaryInstanceService.getCloudinaryInstance();

  ngOnInit(): void {
    this.cloudinaryImage = this.cloudinaryInstance.image(this.imagePublicId());
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    //this.cloudinaryImage.resize(fill().width(450).height(450));
  }
}
