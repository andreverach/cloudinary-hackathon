import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';
import { CloudinaryImage } from '@cloudinary/url-gen';

import { CloudinaryInstanceService } from '../../../core/services/cloudinary-instance.service';
import { pad, scale } from '@cloudinary/url-gen/actions/resize';
import {
  generativeBackgroundReplace,
  generativeRecolor,
  generativeRemove,
  generativeReplace,
  outline,
  extract,
  backgroundRemoval,
} from '@cloudinary/url-gen/actions/effect';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { image, text } from '@cloudinary/url-gen/qualifiers/source';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { autoGravity, compass } from '@cloudinary/url-gen/qualifiers/gravity';
import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';

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
  @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>(false);
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
        this.transformedImage = '';
        const newFil = this.filterToApply();
        //console.log('newFil', newFil);
        this.cloudinaryImage
          .resize(scale().width(1000))
          .delivery(quality(auto()))
          .delivery(format(auto()))
          .effect(generativeBackgroundReplace().prompt(newFil)) //reemplkaza el fondo
          .effect(generativeRecolor(['hair'], '#331c5d').detectMultiple()); //pinta algo
        this.isLoading = true;
        //console.log('cloudinaryImage', this.cloudinaryImage);
        //console.log('cloudinaryImage.toURL()', this.cloudinaryImage.toURL());
        this.transformedImage = this.cloudinaryImage.toURL();
      }
    });
  }
  onLoadTransformedImage() {
    //console.log('onLoadTransformedImage', this.transformedImage);
    this.isLoading = false;
  }
  onErrorLoadImage() {
    this.isLoading = false;
  }
  refresh() {
    this.onRefresh.emit(true);
    this.transformedImage = '';
  }
}

/**
 * const tagsObject = result.info.info.detection.object_detection.data.unidet.tags;
        const tagNames = Object.keys(tagsObject);
        
 */
/* .overlay(
            source(image('hackathon-images/opnfyevdqmrivkgg4xqeo')).position(
              new Position()
                .gravity(compass('south_east'))
                .offsetX(20)
                .offsetY(20)
            )
          ); */
/* .resize(
            pad()
              .width(800)
              .height(800)
              .background(generativeFill().prompt('mug of coffee and cookies'))
          ) */
//.effect(backgroundRemoval()) //quito el fondo
//.effect(generativeBackgroundReplace().prompt('put some spiders'))
//.effect(generativeRecolor('face', 'red')) //cambia el color de algo
//.effect(generativeRecolor('eyes', 'red'))
//.effect(generativeReplace().from('shirt').to('vampire jacket'))
//.resize(scale().height(150)); //agregar objeto a la imagen
//.resize(pad().background(generativeFill().prompt(newFil)))
//.effect(generativeRemove().prompt('eyes').detectMultiple())
//.effect(outline().width(15).blurLevel(200).color('#331c5d'));
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
//.effect(extract().prompt('camera', 'glasses', 'plant')); extraer
//.effect(enhance()); //mejorar imagen
//.adjust(sharpen().strength(150)); // mejorar tmb
/* .resize(
            auto()
              .width(880)
              .height(940)
              .gravity(autoGravity())
          ); */
/* .resize(
            pad()
              .aspectRatio(ar1X1())
              .gravity(compass("center"))
              .background(generativeFill())
          ); */
