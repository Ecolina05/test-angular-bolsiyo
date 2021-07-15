import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  env = environment;
  imageCategories: String[] = [];

  constructor(private httpClient: HttpClient) {
    this.getImageCategories();
  }

  getRandomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  getImageCategories(): string[] {
    return this.imageCategories = [
      'nature',
      'science',
      'education',
      'people',
      'feelings',
      'computer',
      'buildings'
    ];
  }

  getImagesByCategories(category?: string): Observable<any> {
    return this.httpClient.get(`${this.env.apiUrl}/${this.env.apiKey}&category=${category}`);
  }

  getImagesByCategoriesPromise(category?: string): Promise<any> {
    return this.httpClient.get(`${this.env.apiUrl}/${this.env.apiKey}&category=${category}`).toPromise();
  }

  searchImage(filterText: string, filterCategory: string): Observable<any> {
    return this.httpClient.get(`${this.env.apiUrl}/${this.env.apiKey}&category=${filterCategory}&q=${filterText}`);
  }
}
