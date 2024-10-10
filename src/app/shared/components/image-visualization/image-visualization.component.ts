import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryImage } from '@cloudinary/url-gen';

import { CloudinaryInstanceService } from '../../../core/services/cloudinary-instance.service';
import { pad } from '@cloudinary/url-gen/actions/resize';
import {
  generativeBackgroundReplace,
  generativeRecolor,
  generativeRemove,
  generativeReplace,
  outline,
  extract 
} from '@cloudinary/url-gen/actions/effect';
import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-visualization',
  standalone: true,
  imports: [CommonModule, CloudinaryModule],
  templateUrl: './image-visualization.component.html',
  styleUrl: './image-visualization.component.scss',
})
export class ImageVisualizationComponent implements OnInit {
  cloudinaryImage!: CloudinaryImage;
  imagePublicId = input<string>();
  filterToApply = input<string>('');
  transformedImage = '';
  isLoading: boolean = false;
  hasError: boolean = false;
  private readonly cloudinaryInstanceService = inject(
    CloudinaryInstanceService
  );
  cloudinaryInstance = this.cloudinaryInstanceService.getCloudinaryInstance();

  constructor() {
    this.listenFilter();
    /* effect(() => {
      if (this.filterToApply()) {
        const newFil = this.filterToApply();
        console.log('newFil', newFil);
        this.cloudinaryImage.overlay(
          source(
            image(newFil).transformation(
              new Transformation()
                .resize(
                  crop()
                    .width(1.3)
                    .height(1.3)
                    .gravity(focusOn(FocusOn.faces()))
                    .regionRelative()
                )
                .adjust(saturation(50))
                .effect(vignette())
                .resize(scale().width(100))
                .roundCorners(max())
            )
          ).position(
            new Position().gravity(compass('center')).offsetX(-20).offsetY(20)
          )
        );
      }
    }); */
  }
  ngOnInit(): void {
    this.cloudinaryImage = this.cloudinaryInstance.image(this.imagePublicId());
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    //this.cloudinaryImage.resize(fill().width(450).height(450));
    //this.listenFilter();
  }

  listenFilter() {
    effect(() => {
      if (this.filterToApply()) {
        const newFil = this.filterToApply();
        console.log('newFil', newFil);
        this.cloudinaryImage
          .effect(generativeBackgroundReplace().prompt(newFil)) //reemplkaza el fondo
          .resize(pad().background(generativeFill().prompt(newFil))) //agregar objeto a la imagen
          //.effect(generativeRecolor('face', 'red')) //cambia el color de algo
          //.effect(generativeRecolor('eyes', 'red'))
          .effect(
            generativeRecolor(['tongue', 'hair'], '#331c5d').detectMultiple()
          ) //pinta algo
          .resize(pad().background(generativeFill().prompt(newFil)))
          .effect(generativeRemove().prompt('eyes').detectMultiple())          
          .effect(outline().width(15).blurLevel(200).color('#331c5d'));
          //.effect(generativeReplace().from('eyes').to('scars'))
          /* .effect(
            generativeReplace()
              .from('shirt')
              .to('cable knit sweater')
              .preserveGeometry()
          ) */          
        //.effect(generativeRemove().prompt('eyes')); //remueve algo
        //.effect(generativeRecolor('device', '#EA672A').detectMultiple());//cambia el color de todo lo que encuentre en este ejemplo dispositivos
        //.effect(generativeRecolor(['device', hair], '#EA672A').detectMultiple());//cambia el color de todo lo que encuentre en este ejemplo dispositivos y pelo
        //.effect(generativeRecolor('eyes', 'red'))
        //.effect(generativeRecolor('eye', 'blue').detectMultiple());

        this.isLoading = true;
        //console.log('cloudinaryImage', this.cloudinaryImage);
        //console.log('cloudinaryImage.toURL()', this.cloudinaryImage.toURL());
        this.transformedImage = this.cloudinaryImage.toURL();
      }
    });
  }
  onLoadTransformedImage() {
    this.isLoading = false;
  }

  onErrorTransformedImage() {
    this.isLoading = false;
    this.hasError = true;
  }
}

/**
 * const tagsObject = result.info.info.detection.object_detection.data.unidet.tags;
        const tagNames = Object.keys(tagsObject);
 */
