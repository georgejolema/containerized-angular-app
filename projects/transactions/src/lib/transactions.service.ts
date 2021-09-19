import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  getTransactions() {
    return this.api.get<Transaction[]>('/api/transactions');
  }

  constructor(private api: HttpClient) { }
}
