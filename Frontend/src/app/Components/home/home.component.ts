import { Component, OnInit} from '@angular/core';
import {NewsService} from '../../Services/NewsService/news.service';
import {News} from '../../../Data/News';
import {Prodotto} from '../../../Data/Prodotto';
import {ProductsService} from '../../Services/ProductService/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  news: News[] = [];
  products: Prodotto[] = [];
  constructor(private newsService: NewsService, private productService: ProductsService) { }

  ngOnInit() {
    this.getNews();
    this.getProds();

  }
  getNews(): void {
    this.newsService.getNews(3)
      .subscribe(news => this.news = news);
  }
  getProds(): void {
    this.productService.getProducts(3, 1)
      .subscribe(prods => this.products = prods);
  }
  setBG(index: number) {
    const s = this.news[index].photos[0];
    const styles = {
      'background-image': 'url(' + s + ')',
    };
    return styles;
  }
  setBGPr(index: number) {
    const s =  this.products[index].logo;
    const styles = {
      'background-image': 'url(' + s + ')',
    };
    return styles;
  }
  setBGDefault() {
    const styles = {
      'background-image': 'url(assets/logo.jpg)',
    };
    return styles;
  }
  setPB(index: number) {
    const s = this.getProgress(index);
    const styles = {
      'width':  s + '%',
    };
    return styles;
  }
  setCircles() {
    const arr = document.querySelectorAll('.show-spectator');
    for (const element in arr) {
      if (typeof arr[element] === 'object') {
        // arr[element].addEventListener('actoronstage', function() { console.log('Cool');});
      }
    }

  }
  getActorClass(index: number) {
    if ( index === 0) {
      return 'actor curactor';
    }
    return 'actor';
  }
  getProgress(index: number) {
    return Math.round(this.products[index].devCompletion * 100);
  }
}
