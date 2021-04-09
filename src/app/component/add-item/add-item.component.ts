import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Iitem } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [MessageService],
})
export class AddItemComponent implements OnInit {
  @ViewChild('addItemForm', { static: true }) addItemForm: NgForm;
  editMode = false;
  item: Iitem;
  // injecting required Services
  constructor(
    private messageService: MessageService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // For Edit-Item Route to get the id of the item to be edited
    const id = this.route.snapshot.params.id;
    // verify if id is correct or user manupulated
    if (id) {
      const idPresent = this.dataService.checkIdCorrect(id);
      if (idPresent) {
        // id present
        this.item = this.dataService.getItemById(id);
        setTimeout(() => {
          this.addItemForm.form.patchValue({
            name: this.item.name,
            description: this.item.description,
            price: this.item.price,
            quantity: this.item.quantity,
          });
        }, 100);
        this.editMode = true;
      } else {
        // id not present
        this.router.navigate(['/add-item']);
      }
    }
  }

  addItem(): void {
    // when form is valid
    if (
      this.addItemForm.valid &&
      this.addItemForm.value.price &&
      this.addItemForm.value.quantity
    ) {
      console.log(this.addItemForm);
      const item: Iitem = {
        name: this.addItemForm.value.name,
        description: this.addItemForm.value.description,
        id: this.editMode ? this.item.id : new Date().toISOString(),
        price: this.addItemForm.value.price,
        quantity: this.addItemForm.value.quantity,
      };
      if (this.editMode) {
        // on edit mode
        this.dataService.editItem(item);
      } else {
        // on new item
        this.dataService.addItem(item);
      }
      this.messageService.clear();
      this.messageService.add({
        severity: 'success',
        summary: this.editMode ? 'Item updated in' : 'Item Added',
        detail: 'to the inventory',
      });
    } else {
      // When required fields are not filled or validation failed
      this.messageService.clear();
      this.messageService.add({
        severity: 'error',
        summary: 'Required Fields not entered or are incorrect',
        detail: 'Please fill all the fields',
      });
    }
  }
}
