import {Component, Input, OnInit} from '@angular/core';
import {DynamicTitleService} from '../../../Services/DynamicTitle/dynamic-title.service';

@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.css']
})
export class HomesectionComponent implements OnInit {
  @Input() data: any[];
  @Input() isProject: boolean;
  @Input() index: number;
  showId: string;
  constructor(private titleSetter: DynamicTitleService) { }

  ngOnInit() {
    switch (this.index) {
      case 1: this.showId = 'projsShow'; break;
      default: this.showId = 'news';
    }
    this.titleSetter.setTitle('Home');
  }

  setBG(index: number) {
    const s = this.data[index].mainPhoto;
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
  getActorClass(index: number) {
    let classNames = 'actor position-relative';
    if ( index === 0) {
      classNames = classNames + ' curactor';
    }
    return classNames;
  }
  getProgress(index: number) {
    return Math.round(this.data[index].devCompletion * 100);
  }
  getTitle() {
    switch (this.index) {
      case 1: return 'Running Projects';
      default: return 'News';
    }
  }
  getTitleId() {
    switch (this.index) {
      case 1: return 'projs';
      default: return 'newsTitle';
    }
  }
  getShowId() {
    return '#' + this.showId;
  }
  getErrorMsg() {
    switch (this.index) {
      case 1: return 'No Running Projects found';
      default: return 'No Recent News found';
    }
  }
  getBttmLinkMsg() {
    switch (this.index) {
      case 1: return 'See all projects';
      default: return 'Read all news';
    }
  }
  getDescrPos() {
    if (this.index % 2 !== 0) {
      return 'descr-left';
    }
    return 'descr-right';
  }
  getImgPos() {
    if (this.index % 2 !== 0) {
      return 'image-right';
    }
    return 'image-left';
  }
}
