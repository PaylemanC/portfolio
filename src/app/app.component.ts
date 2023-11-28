import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';
  loading = true;

  constructor() { }

  ngOnInit() {
    this.loading;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
