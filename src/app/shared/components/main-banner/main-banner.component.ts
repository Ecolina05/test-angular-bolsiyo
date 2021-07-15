import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit, OnDestroy {

  randomImageSubs: Subscription;
  randomImage: any;

  constructor(private imagesServices: ImagesService) { }

  ngOnInit(): void {
    this.getRandomImage()
  }

  ngOnDestroy(): void {
    this.randomImageSubs && this.randomImageSubs.unsubscribe();
  }

  /**
   * Get a random image of pixabay api
   */
  getRandomImage(): void {
    try {
      this.randomImageSubs = this.imagesServices.getImagesByCategories('nature')
        .subscribe(
          images => { this.randomImage = images?.hits[this.imagesServices.getRandomNumber(9)]?.largeImageURL },
          error => console.log(error)
        );

    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Dispatch onSearch event to search random images`
   */
  onSearchRandomImages() {
    window.dispatchEvent(new Event('onSearch'));
  }
}
