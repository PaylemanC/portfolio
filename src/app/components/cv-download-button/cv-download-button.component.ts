import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-download-button',
  template: `
  <a id="cv" [href]="urlCV" download="CV_CarinaPayleman.pdf">
    <span class="cv-content"><span class="cv-icon"></span>Descargar CV</span>
  </a>`,
  styleUrls: ['./cv-download-button.component.scss']
})
export class CvDownloadButtonComponent {
  @Input() urlCV = '';

}
