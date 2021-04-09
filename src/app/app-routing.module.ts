import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './component/add-item/add-item.component';
import { SeeItemsComponent } from './component/see-items/see-items.component';

const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: 'see-items', component: SeeItemsComponent },
  { path: 'edit-item/:id', component: AddItemComponent },
  { path: '**', redirectTo: '/add-item' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
