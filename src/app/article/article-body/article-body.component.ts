import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input()
  item;
  constructor() {
    console.log('ArticleBodyComponent: constructor');
  }

  ngOnInit() {
    console.log('ArticleBodyComponent: ngOnInit');
  }
  ngOnChanges() {
    console.log('ArticleBodyComponent: ngOnChanges');

  }
}
