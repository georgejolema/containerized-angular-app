import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './components/actions.component';
import { PaymentsComponent } from './components/payments.component';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () => import('transactions').then(m => m.TransactionsModule),
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'actions',
    component: ActionsComponent,
  },
  {
    path: '**',
    redirectTo: 'transactions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
