import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iitem } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-see-items',
  templateUrl: './see-items.component.html',
  styleUrls: ['./see-items.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class SeeItemsComponent implements OnInit, OnDestroy {
  filterValue = '';
  items: Iitem[];
  unSubscribeSubject = new Subject();

  // Injecting required services
  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    // Unsubscribing the Observable once component destroyed
    this.unSubscribeSubject.next();
    this.unSubscribeSubject.unsubscribe();
  }
  ngOnInit(): void {
    // Table data from the service via Observable
    this.dataService.itemsSubject
      .pipe(takeUntil(this.unSubscribeSubject))
      .subscribe((items) => {

        this.items = items;
      });
    this.dataService.getItems();
  }
  // when Delete item clicked
  deleteItem(event: Event, id: string): void {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataService.deleteItem(id);
        this.messageService.clear();
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Item Deleted',
        });
      },
      reject: () => {
        this.messageService.clear();

        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'Item not Deleted',
        });
      },
    });
  }
  // on Edit item
  editItem(id: string): void {
    this.router.navigate(['/edit-item', id]);
  }
}
