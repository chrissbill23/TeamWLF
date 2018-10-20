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
}
