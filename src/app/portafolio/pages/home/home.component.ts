import { Component } from '@angular/core';
import { PortafolioCard } from '../../interfaces/portafolioCard.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  cards:PortafolioCard[] = [

    {
      "id": "educyhabModal",
      "imgDestacada":"../assets/img/educacionyhabitos.jpg",
      "title": "Educación y Hábitos",
      "subTitle": "Página Web y Blog",
      "summary":"Este proyecto se desarrolló con el objetivo de promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se brinda servicios y educación que refuerzan la temática a través del blog.",
      "date": "Finalizada en Abril del 2023",
      "objetivo": "El objetivo de este proyecto es promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se dan a conocer diversos servicios relacionados con la analítica de datos, consultorías de educación superior, cursos, diplomados y otros. En su sitio web, se encuentra disponible información detallada sobre cada uno de estos servicios, así como recursos y herramientas para facilitar el proceso de aprendizaje y crecimiento personal de los usuarios. Como parte de la comunidad, se pueden acceder a contenidos exclusivos y descuentos especiales en productos y servicios afines a los temas de interés. El proyecto tiene como finalidad proporcionar un espacio integral para la adquisición de conocimientos y la mejora de hábitos saludables de una manera amena y efectiva.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página",
        "Una vez que el diseño ha sido aprobado, se inicia la configuración de Wordpress y se procede a maquetar las diferentes secciones previamente establecidas con la ayuda de Elementor. Este proceso permite crear una página web atractiva, intuitiva y funcional que cumpla con las expectativas del cliente y brinde una excelente experiencia de usuario."
      ],
      "tecnologias": [
        {
          "imagen": "/assets/img/wordpress.svg",
          "texto": "Wordpress"
        },
        {
          "imagen": "/assets/img/elementor.svg",
          "texto": "Elementor"
        },
        {
          "imagen": "/assets/img/figma.svg",
          "texto": "Figma"
        },
        {
          "imagen": "/assets/img/photoshop.svg",
          "texto": "Photoshop"
        },
        {
          "imagen": "/assets/img/illustrator.svg",
          "texto": "Illustrator"
        },
        {
          "imagen": "/assets/img/css.svg",
          "texto": "CSS"
        }
      ],
      "poster":[
        "/assets/img/Educacion1.jpg",
        "/assets/img/Educacion2.jpg",
        "/assets/img/Educacion3.jpg"

      ],
      "enlace": "https://educacionyhabitos.com/"
    },

    {
      "id": "seletieneModal",
      "imgDestacada":"../assets/img/seletiene.jpg",
      "title": "Seletiene Shop",
      "subTitle": "Tienda Virtual Dropshipping",
      "summary":"Este proyecto se desarrolló con el objetivo de promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se brinda servicios y educación que refuerzan la temática a través del blog.",
      "date": "Finalizada en Abril del 2023",
      "objetivo": "El objetivo de este proyecto es promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se dan a conocer diversos servicios relacionados con la analítica de datos, consultorías de educación superior, cursos, diplomados y otros. En su sitio web, se encuentra disponible información detallada sobre cada uno de estos servicios, así como recursos y herramientas para facilitar el proceso de aprendizaje y crecimiento personal de los usuarios. Como parte de la comunidad, se pueden acceder a contenidos exclusivos y descuentos especiales en productos y servicios afines a los temas de interés. El proyecto tiene como finalidad proporcionar un espacio integral para la adquisición de conocimientos y la mejora de hábitos saludables de una manera amena y efectiva.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página",
        "Una vez que el diseño ha sido aprobado, se inicia la configuración de Wordpress y se procede a maquetar las diferentes secciones previamente establecidas con la ayuda de Elementor. Este proceso permite crear una página web atractiva, intuitiva y funcional que cumpla con las expectativas del cliente y brinde una excelente experiencia de usuario."
      ],
      "tecnologias": [
        {
          "imagen": "/assets/img/wordpress.svg",
          "texto": "Wordpress"
        },
        {
          "imagen": "/assets/img/Divi.svg",
          "texto": "Divi"
        },
        {
          "imagen": "/assets/img/woocommerce.svg",
          "texto": "Woocommerce"
        },
        {
          "imagen": "/assets/img/dropi.svg",
          "texto": "Dropi"
        },
        {
          "imagen": "/assets/img/figma.svg",
          "texto": "Figma"
        },
        {
          "imagen": "/assets/img/photoshop.svg",
          "texto": "Photoshop"
        },
        {
          "imagen": "/assets/img/illustrator.svg",
          "texto": "Illustrator"
        },
        {
          "imagen": "/assets/img/js.svg",
          "texto": "JavaScript"
        },
        {
          "imagen": "/assets/img/css.svg",
          "texto": "CSS"
        }
      ],
      "poster":[
        "/assets/img/Educacion1.jpg",
        "/assets/img/Educacion2.jpg",
        "/assets/img/Educacion3.jpg"

      ],
      "enlace": "https://educacionyhabitos.com/"
    },

    {
      "id": "laljoyeriaModal",
      "imgDestacada":"../assets/img/laljoyeria.jpg",
      "title": "Lal Joyería",
      "subTitle": "Tienda Virtual y Blog",
      "summary":"Este proyecto se desarrolló con el objetivo de promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se brinda servicios y educación que refuerzan la temática a través del blog.",
      "date": "Finalizada en Abril del 2023",
      "objetivo": "El objetivo de este proyecto es promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se dan a conocer diversos servicios relacionados con la analítica de datos, consultorías de educación superior, cursos, diplomados y otros. En su sitio web, se encuentra disponible información detallada sobre cada uno de estos servicios, así como recursos y herramientas para facilitar el proceso de aprendizaje y crecimiento personal de los usuarios. Como parte de la comunidad, se pueden acceder a contenidos exclusivos y descuentos especiales en productos y servicios afines a los temas de interés. El proyecto tiene como finalidad proporcionar un espacio integral para la adquisición de conocimientos y la mejora de hábitos saludables de una manera amena y efectiva.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página",
        "Una vez que el diseño ha sido aprobado, se inicia la configuración de Wordpress y se procede a maquetar las diferentes secciones previamente establecidas con la ayuda de Elementor. Este proceso permite crear una página web atractiva, intuitiva y funcional que cumpla con las expectativas del cliente y brinde una excelente experiencia de usuario."
      ],
      "tecnologias": [
        {
          "imagen": "/assets/img/wordpress.svg",
          "texto": "Wordpress"
        },{
          "imagen": "/assets/img/woocommerce.svg",
          "texto": "Woocommerce"
        },
        {
          "imagen": "/assets/img/Divi.svg",
          "texto": "Divi"
        },
        {
          "imagen": "/assets/img/figma.svg",
          "texto": "Figma"
        },
        {
          "imagen": "/assets/img/photoshop.svg",
          "texto": "Photoshop"
        },
        {
          "imagen": "/assets/img/illustrator.svg",
          "texto": "Illustrator"
        },
        {
          "imagen": "/assets/img/css.svg",
          "texto": "CSS"
        },
        {
          "imagen": "/assets/img/js.svg",
          "texto": "JavaScript"
        }
      ],
      "poster":[
        "/assets/img/Educacion1.jpg",
        "/assets/img/Educacion2.jpg",
        "/assets/img/Educacion3.jpg"

      ],
      "enlace": "https://educacionyhabitos.com/"
    },

    {
      "id": "sltModal",
      "imgDestacada":"../assets/img/slt.jpg",
      "title": "Smart Law Tech",
      "subTitle": "Web Dinámica",
      "summary":"Este proyecto se desarrolló con el objetivo de promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se brinda servicios y educación que refuerzan la temática a través del blog.",
      "date": "Finalizada en Abril del 2023",
      "objetivo": "El objetivo de este proyecto es promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se dan a conocer diversos servicios relacionados con la analítica de datos, consultorías de educación superior, cursos, diplomados y otros. En su sitio web, se encuentra disponible información detallada sobre cada uno de estos servicios, así como recursos y herramientas para facilitar el proceso de aprendizaje y crecimiento personal de los usuarios. Como parte de la comunidad, se pueden acceder a contenidos exclusivos y descuentos especiales en productos y servicios afines a los temas de interés. El proyecto tiene como finalidad proporcionar un espacio integral para la adquisición de conocimientos y la mejora de hábitos saludables de una manera amena y efectiva.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página",
        "Una vez que el diseño ha sido aprobado, se inicia la configuración de Wordpress y se procede a maquetar las diferentes secciones previamente establecidas con la ayuda de Elementor. Este proceso permite crear una página web atractiva, intuitiva y funcional que cumpla con las expectativas del cliente y brinde una excelente experiencia de usuario."
      ],
      "tecnologias": [
        {
          "imagen": "/assets/img/angular.svg",
          "texto": "Angular"
        },
        {
          "imagen": "/assets/img/scss.svg",
          "texto": "SCSS"
        },
        {
          "imagen": "/assets/img/ts.svg",
          "texto": "TypeScript"
        },
        {
          "imagen": "/assets/img/figma.svg",
          "texto": "Figma"
        },
        {
          "imagen": "/assets/img/photoshop.svg",
          "texto": "Photoshop"
        },
        {
          "imagen": "/assets/img/illustrator.svg",
          "texto": "Illustrator"
        },
        {
          "imagen": "/assets/img/ae.svg",
          "texto": "After Effects"
        }
        
        
      ],
      "poster":[
        "/assets/img/Educacion1.jpg",
        "/assets/img/Educacion2.jpg",
        "/assets/img/Educacion3.jpg"

      ],
      "enlace": "https://educacionyhabitos.com/"
    }
  
  

  ]

  
}
