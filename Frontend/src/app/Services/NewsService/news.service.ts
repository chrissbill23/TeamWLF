import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from '../MessagesSerice/message.service';
import {News} from '../../../Data/News';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {ErrorhandlerService} from '../ErrorHandler/errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = 'http://localhost:3002/news';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a NEwsService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`NewsService: ${message}`);
  }
  /** GET News from the server */
  getNews (limit = -1, descOrder = true): Observable<News[]> {
    return this.http
      .get<News[]>(this.newsUrl + '/' + limit)
      .pipe(
        tap(news => this.log('fetched news')),
        catchError(ErrorhandlerService.handleError('getNews', []))
      );
  }
}

