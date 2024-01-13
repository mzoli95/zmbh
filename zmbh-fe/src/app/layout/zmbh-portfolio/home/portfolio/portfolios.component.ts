import { Component } from '@angular/core';

@Component({
  selector: 'app-mzbh-home-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.scss',
})
export class HomePortfoliosComponent {
  pictures = [
    {
      url: '../../../../assets/innovate2.png',
      title: 'Project 1',
      alt: 'Project 1',
    },
    {
      url: '../../../../assets/innovate4.png',
      title: 'Project 2',
      alt: 'Project 2',
    },
    {
      url: '../../../../assets/innovate2.png',
      title: 'Project 3',
      alt: 'Project 3',
    },
    {
      url: '../../../../assets/innovate4.png',
      title: 'Project 4',
      alt: 'Project 4',
    },
    {
      url: '../../../../assets/innovate2.png',
      title: 'Project 5',
      alt: 'Project 5',
    },
  ];
}
