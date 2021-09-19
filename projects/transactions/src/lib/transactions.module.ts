import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionsTableComponent } from './transactions-table.component';
import { TransactionsComponent } from './transactions.component';



@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TransactionsComponent,
    }])
  ]
})
export class TransactionsModule { }
