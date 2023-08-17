import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  template: `<div class="scrolltop-wrap">
  <a href="#" role="button" aria-label="Volver arriba">
    <svg height="48" viewBox="0 0 48 48" width="48" height="48px" xmlns="http://www.w3.org/2000/svg">
      <path id="scrolltop-bg" d="M0 0h48v48h-48z"></path>
      <path id="scrolltop-arrow" d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"></path>
    </svg>
  </a>
</div>`,
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {

}
