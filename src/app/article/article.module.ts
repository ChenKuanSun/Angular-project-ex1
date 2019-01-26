import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [ArticleListComponent, ArticleHeaderComponent, ArticleBodyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApiModule
  ],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
