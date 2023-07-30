import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeMenu = false;

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  activeSection: string = 'introduction';

  @HostListener('window:scroll', ['$event.target'])
  onScroll(target: HTMLElement) {
    this.detectCurrentSection(target);
  }

  detectCurrentSection(target: HTMLElement) {
    const sections = document.querySelectorAll('section');
    let currentSection: string = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollTop = target.scrollTop || window.pageYOffset;

      if (scrollTop >= sectionTop - sectionHeight / 4) {
        currentSection = section.id;
      }
    });

    this.activeSection = currentSection;
  }
}
