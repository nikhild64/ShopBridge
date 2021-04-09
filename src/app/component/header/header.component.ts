import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    // Creating menu items
    this.items = [
      {
        label: 'Add new Item',
        routerLink: '/add-item',
      },
      { label: 'See all items', routerLink: '/see-items' },
    ];
  }
}
