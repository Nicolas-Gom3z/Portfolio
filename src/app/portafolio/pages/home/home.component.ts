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
      "imgDestacada":"../assets/img/educacionyhabitos.jpg",
      "title": "Educación y Hábitos",
      "subTitle": "Página Web y Blog",
      "summary":"La página web fue diseñada con el propósito de promover el lanzamiento del libro <b>'Cómo generar hábitos y divertirse en el proceso'</b> y al mismo tiempo, ofrecer servicios y educación relacionados con el tema a través del blog. Se estableció una estructura clara y amigable para brindar una experiencia de usuario satisfactoria y efectiva.<br> Además, se ofrece asesoría en el manejo del CMS para que el cliente sea capaz de administrar y actualizar la página.",
      "date": "Finalizada en Abril del 2023",
      "objetivo": "El objetivo de este proyecto es promocionar el lanzamiento del libro 'Cómo generar hábitos y divertirse en el proceso', a la vez que se dan a conocer diversos servicios relacionados con la analítica de datos, consultorías de educación superior, cursos, diplomados y otros. En su sitio web, se encuentra disponible información detallada sobre cada uno de estos servicios, así como recursos y herramientas para facilitar el proceso de aprendizaje y crecimiento personal de los usuarios. Como parte de la comunidad, se pueden acceder a contenidos exclusivos y descuentos especiales en productos y servicios afines a los temas de interés. El proyecto tiene como finalidad proporcionar un espacio integral para la adquisición de conocimientos y la mejora de hábitos saludables de una manera amena y efectiva.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página.",
        "Una vez que el diseño ha sido aprobado, se inicia la configuración de Wordpress y se procede a maquetar las diferentes secciones previamente establecidas con la ayuda de Elementor. Este proceso permite crear una página web atractiva, intuitiva y funcional que cumple con las expectativas del cliente y brinda una excelente experiencia de usuario."
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
          "texto": "Adobe Photoshop"
        },
        {
          "imagen": "/assets/img/illustrator.svg",
          "texto": "Adobe Illustrator"
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
  
      "imgDestacada":"../assets/img/laljoyeria.jpg",
      "title": "Lal Joyería",
      "subTitle": "Tienda Virtual y Blog",
      "summary":"Implementación de una tienda virtual que ofrece una amplia variedad de joyas, piedras preciosas y semipreciosas. Trabajando con una estructura previamente definida por el cliente, el objetivo fue personalizar el flujo de compra y habilitar una pasarela de pagos eficiente y segura.<br> Además, se ofrece asesoría sobre el funcionamiento de <b>WooCommerce</b> y sus características, para que el cliente pueda administrar la tienda de manera autónoma. ",
      "date": "Finalizada en Marzo del 2023",
      "objetivo": "El objetivo de este proyecto es en primera instancia optimizar el sitio ya que el cliente ya tenia una configuración y estructura realizada por él mismo. Por otro lado se requiere implementar, configurar y personalizar las caracteristicas que ofrece Woocommerce.",
      "metodologia":[
        "Se realiza un analisis para identificar el estado del sitio, posterior a esto se comienza a implementar Woocommerce y Mercado Pago. ",
        "Una vez que se realizan las configuraciones iniciales, se implementa sección de 'Lista de deseos' y se comienza la personalización de las diferentes secciones incluyendo carrito, pagina de producto, categorias, filtros, checkout y cuenta de usuario.",
        "Luego de tener una flujo funcional se realiza la vinculación al entorno de Google y Facebook. Se configuran los eventos teniendo en cuenta las campañas y objetivos del Trafikker Digital.",
        "Se personaliza y configura las seccion del blog y de sus articulos teniendo en cuenta estilo grafico establecido por el cliente."
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
          "imagen": "/assets/img/elementor.svg",
          "texto": "Elementor"
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
        },
        {
          "imagen": "/assets/img/tagmanager.svg",
          "texto": "Tag Manager"
        },
        {
          "imagen": "/assets/img/analytics.svg",
          "texto": "Google Analytics"
        },
        {
          "imagen": "/assets/img/facebook.svg",
          "texto": "Business Manager"
        }
      ],
      "poster":[
        "/assets/img/Lal1.jpg",
        "/assets/img/Lal2.jpg",
        "/assets/img/Lal3.jpg",
        "/assets/img/Lal4.jpg",
        "/assets/img/Lal5.jpg",

      ],
      "enlace": "https://laljoyeria.com/"
    },

    {
      "imgDestacada":"../assets/img/seletiene.jpg",
      "title": "Seletiene Shop",
      "subTitle": "Tienda Virtual Dropshipping",
      "summary":"Tienda virtual bajo el modelo de <b>Dropshipping</b> con una estrategia efectiva para aumentar las ventas y la visibilidad de la marca en línea. Este proceso implica la creación de una tienda en línea que vende productos sin tener un inventario físico propio, y la promoción de dicha tienda mediante campañas por medio del entorno que ofrece Google y Facebook.",
      "date": "Finalizada en Diciembre del 2022",
      "objetivo": " crear una tienda virtual completamente personalizada que se vincule con el modelo de negocio dropshipping con Dropi, para ofrecer una experiencia de compra fluida y sencilla para los clientes. Además, se integrarán eventos de seguimiento de Google y Facebook para crear anuncios efectivos y aumentar la visibilidad de la tienda.",
      "metodologia":[
        "Se identifican las necesidades de la tienda, se configura el entorno en Wordpress. Se instala Woocommerce y se configuran las caracteristicas según necesidades del cliente incluyendo configuraciones de costos de envío y campos necesarios para avanzar en el checkout. Se establece conexión con la API de Dropi y se realizan las pruebas correspondientes.",
        "Se establece conexión con la API de Dropi y se realizan las pruebas correspondientes.",
        "Con ayuda de Divi, se construye una identidad visual teniendo en cuenta los recursos multimedia, colores y tiopgrafias ya establcidas por el cliente. Se desarolla el header con ayuda de bloques con código HTML, CSS Y JS ya que el cliente solicita un diseño particular que no es posible ealizar con los bloques que trae el constructor por defecto.",
        "Se instala el Pixel de Google y Facebook. Se crean los eventos siguiendo las indicaciones del Trafikker Digital para realizar el lanzamiento de las diferentes campañas publicitarias."
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
        },
        {
          "imagen": "/assets/img/tagmanager.svg",
          "texto": "Google Tag Manager"
        },
        {
          "imagen": "/assets/img/analytics.svg",
          "texto": "Google Analytics"
        },
        {
          "imagen": "/assets/img/facebook.svg",
          "texto": "Business Manager"
        }
      ],
      "poster":[
        "/assets/img/seletiene1.jpg",
        "/assets/img/seletiene2.jpg",
        "/assets/img/seletiene3.jpg",
        "/assets/img/seletiene4.jpg",
        "/assets/img/seletiene5.jpg",
        "/assets/img/seletiene6.jpg",

      ],
      "enlace": "https://educacionyhabitos.com/"
    },

    

    {

      "imgDestacada":"../assets/img/slt.jpg",
      "title": "Smart Law Tech",
      "subTitle": "Web Dinámica",
      "summary":"Proyecto realizado para una empresa que ofrece servicios que fusionan el derecho con el poder de la inteligencia artificial.<br> Se diseña y desarrolla teniendo en cuenta la identidad corporativa de la empresa. Este sitio tiene la capacidad de actualizar su contenido en tiempo real teniendo en cuenta la información de una base de datos externa.",
      "date": "Finalizada en Noviembre del 2021",
      "objetivo": "Crear sitio web empresarial teniendo en cuenta identidad corporatica ya establecida. Adicional a esto implementar un sistema que permita consumir la información del sitio desde una API.",
      "metodologia":[
        "Se elabora un mockup tomando en cuenta los referentes del cliente y los requerimientos específicos del proyecto. Una vez establecida una estructura base clara, se procede a diseñar un prototipo que permite simular la experiencia del usuario mientras navega e interactúa en las diferentes secciones de la página",
        "Una vez que el diseño ha sido aprobado, se crea el proyecto en Angular con su respesctiva estructura. Se desarrolla una pequeña libreria de estilos con ayuda de SCSS para agilizar y optimizar el proceso.",
        "Se crea una plantilla estatica para realizar todos los ajustes de maquetación, una vez esta finalizado se implementan servicios que permitiran hacer las peticiones correspondientes al servidor y mostraran la información."
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
        "/assets/img/slt1.jpg",
        "/assets/img/slt2.jpg",
        "/assets/img/slt3.jpg"

      ],
      "enlace": "https://educacionyhabitos.com/",
      "anotacion": "* Actualmente el sitio ya no se encuentra en linea,sin embargo este enlace lleva a uno de los prototipos funcionales creados y alojados en un servidor provisional"
    }
  
  

  ]

  

}
