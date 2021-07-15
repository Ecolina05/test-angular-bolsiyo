import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Output() imagesResult = new EventEmitter();

  searchSubs: Subscription;
  imagesCategories: String[] = [];
  filterText: string;
  filterCategory: string;

  constructor(private imagesServices: ImagesService) { }

  ngOnInit(): void {
    this.imagesCategories = this.imagesServices.getImageCategories();
  }

  ngOnDestroy(): void {
    this.searchSubs && this.searchSubs.unsubscribe();
  }

  goToHome(): void {
    this.imagesResult.emit([]);
  }

  onSearch(): void {
    this.searchSubs = this.imagesServices.searchImage(this.filterText, this.filterCategory)
      .subscribe(
        images => images?.hits?.length > 0 && this.imagesResult.emit(images),
        error => console.log(error)
      );
  }
}
