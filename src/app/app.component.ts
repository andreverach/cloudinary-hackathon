import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import the CloudinaryModule.
import { CloudinaryModule } from '@cloudinary/ng';
// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { environment } from '../environments/environment';
import { ImageUploaded } from './core/interfaces/ImageUploaded.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'scary-filter-image';
  img!: CloudinaryImage;
  cloudinaryInstance!: Cloudinary;
  myWidget: any;
  ngOnInit() {
    this.initCloudinary();
    //this.showImage();
    //this.initWidget();
  }

  showImage(imagePublicId: string) {
    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = this.cloudinaryInstance.image(imagePublicId);
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));
  }

  initCloudinary() {
    // Create a Cloudinary instance and set your cloud name.
    this.cloudinaryInstance = new Cloudinary({
      cloud: {
        cloudName: environment.CLOUD_NAME,
      },
    });
  }

  

  
}
