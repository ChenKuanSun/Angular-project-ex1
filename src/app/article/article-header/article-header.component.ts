import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item;

  orig_item = '';


  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }
  doEdit(title) {
    this.titleChanged.emit(this.item);
  }

  doCancel() {
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }
  deleteArticle() {
    this.delete.emit(this.item);
  }
}
