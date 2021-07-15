import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerCategoriesComponent } from './container-categories/container-categories.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageDetailsComponent } from './image-details/image-details.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ContainerCategoriesComponent,
    MainBannerComponent,
    ImageDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ContainerCategoriesComponent,
    MainBannerComponent,
    ImageDetailsComponent
  ]
})
export class ComponentsModule { }
