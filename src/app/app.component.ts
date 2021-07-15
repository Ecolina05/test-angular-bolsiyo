import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imagesCategories: String[] = [];
  imagesResult: any;
  currentImage: any;

  constructor(private imagesServices: ImagesService) { }

  ngOnInit(): void {
    this.imagesCategories = this.imagesServices.getImageCategories();
  }

  getImagesResult(imagesResult): void {
    this.imagesResult = imagesResult;
  }

}
