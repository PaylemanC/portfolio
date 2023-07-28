import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() email: string = '';
  @Input() github = { url: '', user: '' };
  @Input() linkedin = { url: '', user: '' };
  @Input() name = '';
}
