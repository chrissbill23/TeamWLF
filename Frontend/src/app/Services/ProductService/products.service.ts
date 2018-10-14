import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../MessagesSerice/message.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ErrorhandlerService} from '../ErrorHandler/errorhandler.service';
import {Prodotto} from '../../../Data/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'http://localhost:3002/products';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a ProductsService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductsService: ${message}`);
  }
  /** GET Products from the server */
  getProducts (limit = -1, running = 0, descOrder = -1): Observable<Prodotto[]> {
    return this.http
      .get<Prodotto[]>(this.productsUrl + '/' + limit + '/' + running + '/' + descOrder)
      .pipe(
        tap(products => this.log('fetched products')),
        catchError(ErrorhandlerService.handleError('getProducts', []))
      );
  }
}
