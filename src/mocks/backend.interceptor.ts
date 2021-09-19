import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import transactions from './transactions.mock';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('api/transactions')) {
      return of(new HttpResponse({
        status: 200,
        body: transactions
      }));
    }
    return next.handle(req);
  }
}
