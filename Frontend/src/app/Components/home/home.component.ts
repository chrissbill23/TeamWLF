import { Component, OnInit} from '@angular/core';
import {NewsService} from '../../Services/NewsService/news.service';
import {News} from '../../../Data/News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  news: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews(): void {
    this.newsService.getNews(3)
      .subscribe(news => this.news = news);
  }
  setBG(index: number) {
    const s =  './' + this.news[index].photos[0];
    const styles = {
      'background-image': 'url(' + s + ')',
    };
    return styles;
  }
}
