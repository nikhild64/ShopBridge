import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
  ],
})
export class AppprimengModule {}
