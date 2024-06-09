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

  navbarHeight: number = 80;
  activeSection: string = 'introduction';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section: Element) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop - this.navbarHeight;
      const sectionBottom = sectionElement.offsetTop + sectionElement.clientHeight - this.navbarHeight;

      if (sectionTop <= scrollPos + 60 && sectionBottom > scrollPos + 60) {
        const id = section.getAttribute('id');
        this.activeSection = id ? id : '';
      }
    });
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const yOffset = -this.navbarHeight;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.onScroll();
  }
}
