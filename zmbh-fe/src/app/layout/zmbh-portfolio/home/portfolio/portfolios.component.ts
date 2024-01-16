import { Component } from '@angular/core';
import { PictureModel } from '../../../shared/mockdb';

@Component({
  selector: 'app-mzbh-home-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.scss',
})
export class HomePortfoliosComponent {
  pictures: any;

  constructor() {
    let pictureModel = new PictureModel();
    this.pictures = pictureModel.pictures;
  }
}
