import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { Routes } from "@angular/router";
import { GalleryComponent } from './app/gallery/gallery.component';

export const appRoutes: Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: ImageDetailComponent },
  { path: "", redirectTo: "/gallery", pathMatch: "full" }

]
