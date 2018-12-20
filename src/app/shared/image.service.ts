import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = Images.slice(0);
  }

  getImage(id: number) {
    return Images.slice(0).find(image => image.id === id);
  }
}

const Images = [
  {'id': 1, 'category': 'boats', 'caption': 'View from the boat', 'url': 'assets/img/boat_01.jpeg'}
];
