import { Component, OnInit, signal } from '@angular/core';
import { CloudinaryUploadImageComponent } from '../../shared/components/cloudinary-upload-image/cloudinary-upload-image.component';
import { ImageVisualizationComponent } from '../../shared/components/image-visualization/image-visualization.component';

import { environment } from '../../../environments/environment';
import { ImageUploaded } from '../../core/interfaces/ImageUploaded.interface';
import { AVAILABLE_EFFECTS } from '../../shared/constants/available-effects';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CloudinaryUploadImageComponent, ImageVisualizationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  imageUploaded = signal<any>(null);
  filterToApply = signal('');
  availableFilters = AVAILABLE_EFFECTS;
  ngOnInit(): void {}
  showImage(event: ImageUploaded) {
    //console.log('showImage', event);
    this.imageUploaded.set(event);
  }
  applyFilter(prompt: string) {
    if (this.imageUploaded()) {
      //console.log('ahora si hay  imagen para filtrar');
      this.filterToApply.set(prompt);
    }
    //console.log(this.filterToApply());
  }
}
