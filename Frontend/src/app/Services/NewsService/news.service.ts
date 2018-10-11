import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from '../MessagesSerice/message.service';
import {News} from '../../../Data/News';
import { Observable} from 'rxjs';

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
    this.messageService.add(`HeroService: ${message}`);
  }
  /** GET News from the server */
  getNews (limit = -1, descOrder = true): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl + '/' + limit);
  }
}
