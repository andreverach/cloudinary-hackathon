import { Injectable } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CloudinaryInstanceService {
  private cloudinaryInstance!: Cloudinary;
  constructor() {
    this.initCloudinary();
  }

  initCloudinary() {
    // Create a Cloudinary instance and set your cloud name.
    this.cloudinaryInstance = new Cloudinary({
      cloud: {
        cloudName: environment.CLOUD_NAME,
      },
    });
  }

  getCloudinaryInstance(): Cloudinary {
    return this.cloudinaryInstance;
  }
}
