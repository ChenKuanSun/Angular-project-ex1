import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  textCount = 0;
  constructor() {
  }
  keySomeThing($event) {
    console.log(this);
    if ($event.code === 'Escape') {
      $event.target.value = '';
    }
    this.textCount = $event.target.value.length;
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
}
