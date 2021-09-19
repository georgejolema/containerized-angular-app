import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './model/transaction';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'lib-transactions',
  templateUrl: 'transactions.component.html',
  styles: [
  ]
})
export class TransactionsComponent implements OnInit {
  transactions$: Observable<Transaction[]> = this.transactionsService.getTransactions();

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

}
