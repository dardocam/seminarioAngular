import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  items: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description for Item 1',
      price: 10.99,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
      category: 'Category 1',
      stock: 5,
      quantity: 0
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for Item 2',
      price: 20.99,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
      category: 'Category 2',
      stock: 0,
      quantity: 0
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for Item 3',
      price: 30.99,
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      category: 'Category 3',
      stock: 3,
      quantity: 0

    },
    // Add more items as needed
  ];

  upQuantity(item: Item) {
    if (item.stock > 0) {
      item.quantity++;
      item.stock--;
    }
  }
  downQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }
  }
}
