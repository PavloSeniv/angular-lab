import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  items: Item[] = [
    {
      id: '0',
      name: 'Item A-1',
      image: '../assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '4.99',
      description: 'Lorem20',
    },
    {
      id: '0',
      name: 'Item A-1',
      image: '../assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '4.99',
      description: 'Lorem20',
    },
    {
      id: '0',
      name: 'Item A-1',
      image: '../assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '4.99',
      description: 'Lorem20',
    },
    {
      id: '0',
      name: 'Item A-1',
      image: '../assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '4.99',
      description: 'Lorem20',
    },
    {
      id: '0',
      name: 'Item A-1',
      image: '../assets/images/A/A-1.png',
      category: 'A',
      featured: true,
      label: 'L-1',
      price: '4.99',
      description: 'Lorem20',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
