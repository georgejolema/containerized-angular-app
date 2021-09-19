import { Component, Input } from "@angular/core";
import { Transaction } from "./model/transaction";

@Component({
  selector: 'lib-transactions-table',
  templateUrl: 'transactions-table.component.html'
})
export class TransactionsTableComponent {
  @Input() transactions: Transaction[] = []
}