import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

interface Category {
  name: string;
  image;
}

@Component({
  selector: 'app-container-categories',
  templateUrl: './container-categories.component.html',
  styleUrls: ['./container-categories.component.scss']
})
export class ContainerCategoriesComponent implements OnInit, OnDestroy {

  @Output() imagesResult = new EventEmitter();

  searchSubs: Subscription;
  imagesCategories: string[] = [];
  categories: Category[] = [];

  constructor(private imagesServices: ImagesService) { }

  ngOnInit(): void {
    this.getImagesCategories();
    this.onInitCategories();

    window.addEventListener('onSearch', () => this.onSearch({ name: this.imagesCategories[this.imagesServices.getRandomNumber(5)] }));
  }

  ngOnDestroy(): void {
    this.searchSubs && this.searchSubs.unsubscribe();
  }

  getImagesCategories(): void {
    this.imagesCategories = this.imagesServices.getImageCategories();
  }

  onInitCategories(): void {
    this.imagesCategories.map(async category => {
      this.categories.push({
        name: category,
        image: await this.getRandomImageByCategory(category)
      });
    });
  }

  async getRandomImageByCategory(imageCategory: string) {
    try {
      const res: any = await this.imagesServices.getImagesByCategoriesPromise(imageCategory);
      return res && res.hits[this.imagesServices.getRandomNumber(9)]?.largeImageURL;
    } catch (e) {
      console.log(e);
    }
  }

  onSearch(category): void {
    const { name } = category;

    this.searchSubs = this.imagesServices.searchImage('', name)
      .subscribe(
        images => images?.hits?.length > 0 && this.imagesResult.emit(images),
        error => console.log(error)
      );
  }
}
