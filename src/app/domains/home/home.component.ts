import { Component, OnInit, signal } from '@angular/core';
import { CloudinaryUploadImageComponent } from '../../shared/components/cloudinary-upload-image/cloudinary-upload-image.component';
import { ImageVisualizationComponent } from '../../shared/components/image-visualization/image-visualization.component';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CloudinaryUploadImageComponent, ImageVisualizationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  imagePublicId = signal('');

  ngOnInit(): void {}
  showImage(event: string) {
    console.log('showImage', event);
    this.imagePublicId.set(event);
  }
}
