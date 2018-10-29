import { Component, OnInit } from '@angular/core';
import {DynamicTitleService} from '../../Services/DynamicTitle/dynamic-title.service';

@Component({
  selector: 'app-search-proj',
  templateUrl: './search-proj.component.html',
  styleUrls: ['./search-proj.component.css']
})
export class SearchProjComponent implements OnInit {

  constructor(private titleSetter: DynamicTitleService) { }

  ngOnInit() {
    this.titleSetter.setTitle('Search');
  }

}
