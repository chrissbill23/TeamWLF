import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DynamicTitleService {
  private appName = 'TeamWLF';
  public constructor(private titleService: Title ) { }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle + ' | ' + this.appName );
  }
}
