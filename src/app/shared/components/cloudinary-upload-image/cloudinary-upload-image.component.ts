import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ImageUploaded } from '../../../core/interfaces/ImageUploaded.interface';
import { UPLOAD_WIDGET_ES } from '../../constants/upload-widget-es';

@Component({
  selector: 'app-cloudinary-upload-image',
  standalone: true,
  imports: [],
  templateUrl: './cloudinary-upload-image.component.html',
  styleUrl: './cloudinary-upload-image.component.scss',
})
export class CloudinaryUploadImageComponent implements OnInit {
  myWidget: any;
  @Output() onUploaded: EventEmitter<ImageUploaded> =
    new EventEmitter<ImageUploaded>();
  ngOnInit(): void {
    this.initWidget();
  }

  initWidget() {
    this.myWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: environment.CLOUD_NAME,
        uploadPreset: environment.UPLOAD_PRESET,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        sources: ['local', 'camera'], // restrict the upload sources to URL and local files
        multiple: false, //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        clientAllowedFormats: ['jpg', 'png', 'webp', 'avif'], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        maxImageWidth: 800, //Scales the image down to a width of 2000 pixels before uploading
        theme: 'purple', //change to a purple theme,
        language: 'es',
        text: UPLOAD_WIDGET_ES.default,
        /* text: {
          es: {
            or: 'ó',
            menu: {
              files: 'Mi dispositivo',
            },
            local: {
              browse: 'Mi galería',
              dd_title_single: 'Arrastra tu imagen aquí',
            },
          },
        }, */
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          const imageUploaded: ImageUploaded = result.info;
          this.onUploaded.emit(imageUploaded);
          //console.log('imageUploaded', imageUploaded);
          //this.showImage(imageUploaded.public_id);
          // Aquí puedes obtener el URL de la imagen subida y almacenarla, por ejemplo:
          //console.log('URL de la imagen:', result.info.secure_url);
        }
      }
    );
  }
  openWidget() {
    this.myWidget.open();
  }
}
