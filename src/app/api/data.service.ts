import { Injectable } from '@angular/core';
import { ApiModule } from './api.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ApiModule
})
export class DataService {
  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get('http://localhost:4200/api/articles.json')
  }
  run() {
    console.log('DataService');
  }
  doDelete(item) {
    return this.http.delete('http://localhost:4200/api/articles.json' + item.id);
  }
  doModify(post: any) {
    return this.http.put('http://localhost:4200/api/articles.json' + post.id, post);
  }

}
