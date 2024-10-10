import { Component } from '@angular/core';
import { CloudinaryUploadImageComponent } from '../../shared/components/cloudinary-upload-image/cloudinary-upload-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CloudinaryUploadImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
