import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  @Input() imageInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
