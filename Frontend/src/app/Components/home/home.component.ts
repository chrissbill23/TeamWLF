import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../Services/NewsService/news.service';
import {News} from '../../../Data/News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews(): void {
    this.newsService.getNews(3)
      .subscribe(news => this.news = news);
  }
}
