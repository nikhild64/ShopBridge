import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iitem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Private property so that all data manuplation should be done from service
  private items: Iitem[] = [];
  itemsSubject = new Subject<Iitem[]>();
  constructor() {}
  // For Adding the Item
  addItem(item: Iitem): void {
    this.items.push(item);
    this.itemsSubject.next(this.items.slice());
  }
  // For get Call
  getItems(): void {
    this.itemsSubject.next(this.items.slice());
  }
  // For Deleting the value
  deleteItem(id: string): void {
    const newList = this.items.filter((item) => {
      return item.id !== id;
    });
    this.items = newList;
    this.itemsSubject.next(this.items.slice());
  }
  // For Editing the item
  editItem(editeditem: Iitem): void {
    const index = this.items.findIndex((item) => {
      return item.id === editeditem.id;
    });
    this.items[index] = editeditem;
    this.itemsSubject.next(this.items.slice());
  }
  // On Edit page to check if ID of item is correct as received in params
  checkIdCorrect(id: string): boolean {
    const index = this.items.findIndex((item) => {
      return item.id === id;
    });
    if (index > -1) {
      return true;
    }
    return false;
  }
  // Returning item based upon the id
  getItemById(id: string): Iitem {
    const index = this.items.findIndex((item) => {
      return item.id === id;
    });
    return this.items[index];
  }
}
