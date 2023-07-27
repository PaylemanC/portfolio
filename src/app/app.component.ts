import { Component } from '@angular/core';
import { Skill } from './models/skill';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor() {}




  //DATA -----------------------------------------------------------
  hardSkills: Skill[] = [
    {
      "name": "Angular",
      "icon": "../../../assets/icons/hard-skills/angular.svg"
    },
    {
      "name": "Django",
      "icon": "../../../assets/icons/hard-skills/django.svg"
    },
    {
      "name": "MySQL",
      "icon": "../../../assets/icons/hard-skills/mysql.svg"
    },
    {
      "name": "Python",
      "icon": "../../../assets/icons/hard-skills/git.svg"
    },
    {
      "name": "TypeScript",
      "icon": "../../../assets/icons/hard-skills/typescript.svg"
    },
    {
      "name": "JavaScript",
      "icon": "../../../assets/icons/hard-skills/javascript.svg"
    },
    {
      "name": "Git",
      "icon": "../../../assets/icons/hard-skills/python.svg"
    },
    {
      "name": "SASS",
      "icon": "../../../assets/icons/hard-skills/sass.svg"
    },
    {
      "name": "HTML&CSS",
      "icon": "../../../assets/icons/hard-skills/html_css.svg"
    }
  ]

  softSkills: Skill[] = [
    {
      "name": "Trabajo en equipo",
      "icon": "../../../assets/icons/soft-skills/2.svg"
    },
    {
      "name": "Autodidacta",
      "icon": "../../../assets/icons/soft-skills/5.svg"
    },
    {
      "name": "Facilidad de aprendizaje",
      "icon": "../../../assets/icons/soft-skills/1.svg"
    },
    {
      "name": "Creatividad",
      "icon": "../../../assets/icons/soft-skills/3.svg"
    },
    {
      "name": "Capacidad analítica",
      "icon": "../../../assets/icons/soft-skills/4.svg"
    }
  ]

  projects: Project[] = [
    {
      id: 1,
      img: '../../../assets/imgs/portfolio.png',
      title: 'Portfolio Personal',
      description: '¡Este portafolio! Realicé tanto diseño como programación, aplicando de mis conocimientos en Angular, Figma, Git, usabilidad UX, entre otros, en un reto personal por realizarlo través de todo su proceso desde la planeación hasta su implementación. Está en constante mejora.',
      skills: ['Angular', 'SCSS', 'TypeScript'],
      github: 'https://github.com/PaylemanC/myPortfolio',
      deploy: '#', /*********************************************/
      status: 'IN PROGRESS',
      category: 'Frontend'
    },
    {
      id: 2,
      img: '../../../assets/imgs/misrutinas.png',
      title: 'MisRutinas',
      description: 'Fitness web full stack para creación y seguimiento de rutinas de entrenamiento. Cuenta con sistema de autenticación y CRUD de rutinas y ejercicios. Fue llevada a cabo durante un año junto a un equipo de 7 personas.',
      skills: ['Angular', 'Django', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/grupoA7ISPC/ProyectoISPCGrupo55/tree/main',
      deploy: '',
      status: 'COMPLETED',
      category: 'Full Stack'
    },
    {
      id: 3,
      img: '../../../assets/imgs/yardsale.png',
      title: 'YardSale',
      description: 'E-commerce de venta de garaje con implementación de routing, carrito y CRUD de productos, conexión con API, etc., iniciado con un maquetado sencillo en HTML&CSS hasta llevarlo al framework de Angular.',
      skills: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/PaylemanC/YardSale--Platzi',
      deploy: 'https://yardsale-platzi.netlify.app/',
      status: 'IN PROGRESS',
      category: 'Frontend'
    },
    {
      id: 4,
      img: '../../../assets/imgs/encriptador.png',
      title: 'Des/Encriptador de Mensajes',
      description: 'Juego de encriptador y desencriptador de mensajes con un algoritmo de vocales desarrollado en JavaScript para uno de los retos de Oracle Next Education.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/PaylemanC/Encriptador-de-mensajes--ONE',
      deploy: 'https://encriptador-mensajes.netlify.app/',
      status: 'COMPLETED',
      category: 'Frontend'
    },
    {
      id: 5,
      img: '../../../assets/imgs/pomodoro-playlist.png',
      title: 'Pomodoro Playlist',
      description: 'Landing page usando la API de Youtube para traer mi lista de reproducción de vídeos con la técnica de estudio pomodoro que uso para programar y estudiar, con paisajes bonitos y música lofi & piano de fondo.',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/PaylemanC/pomodoro-playlist',
      deploy: 'https://study-with-me-playlist.netlify.app/',
      status: 'COMPLETED',
      category: 'Frontend'
    },
    {
      id: 6,
      img: '../../../assets/imgs/eco-store.png',
      title: 'Eco-Store',
      description: 'Landing page responsive de un e-commerce con catálogo de productos ecológicos y sustentables.',
      skills: ['HTML', 'CSS', 'SCSS'],
      github: 'https://github.com/PaylemanC/Eco-Store--Platzi',
      deploy: 'https://eco-store-platzi.netlify.app/',
      status: 'COMPLETED',
      category: 'Frontend'
    },
    // {
    //   id: 7,
    //   img: '../../../assets/imgs/accesible-portfolio.png',
    //   title: 'Portfolio Accesible',
    //   description: 'Un portfolio sencillo priorizando la accesibilidad web de acuerdo a los lineamientos de la WCAG, incluyendo accesibilidad para usuarios con teclado por navegación por tab y lectores de pantalla.',
    //   skills: ['HTML', 'CSS', 'JavaScript'],
    //   github: 'https://github.com/PaylemanC/proyEj-portfolio-accesible--Platzi',
    //   deploy: 'https://master--portfolio-accesible.netlify.app/index.html',
    //   status: 'COMPLETED',
    //   category: 'Frontend'
    // },
    // {
    //   id: 8,
    //   img: '../../../assets/imgs/batatabit.png',
    //   title: 'Batatabit',
    //   description: 'Landing page responsive de la empresa ficticia de bitcoins Batatabit con enfoque en maquetación mobile first.',
    //   skills: ['HTML', 'CSS'],
    //   github: 'https://github.com/PaylemanC/Batabit--Platzi',
    //   deploy: 'https://batabit-crypto.netlify.app/',
    //   status: 'COMPLETED',
    //   category: 'Frontend'
    // }
  ]
}
