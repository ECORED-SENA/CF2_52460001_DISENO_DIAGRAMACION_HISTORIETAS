export default {
  global: {
    componenteFormativo: 'Maquetación',
    descripcionCurso:
      'El documento aborda la maquetación de historietas gráficas, destacando el lenguaje audiovisual (tomas, planos, ángulos), la estructura narrativa (inicio, nudo, desenlace) y la identificación del público objetivo. También analiza el mercado de las historietas, su evolución en Colombia, y la relación entre arte e industria. Incluye referencias bibliográficas y control del documento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lenguaje audiovisual en los cómics',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Escena',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Secuencia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura narrativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Personajes',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis del mercado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lenguaje audiovisual en los cómics',
      referencia:
        'InfoLibros. (2022). ¿Qué es un Comic?: Definición, Características y Curiosidades | Descubre el Mundo de la Literatura. [Archivo de vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nmNG-5K8RMs',
    },
    {
      tema: 'Escena',
      referencia:
        'Rodríguez Mercado, R. (2017). Diseño del cuento-taller: la historieta como medio de difusión de investigaciones universitarias. (s.d.). Editorial Digital UNID.',
      tipo: 'Capítulo 2',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/41167',
    },
    {
      tema: 'Secuencia',
      referencia:
        'EchandoTrazos. (2022). Mejora las viñetas y el Storytelling en tu cómic o manga. [Archivo de vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_tvN7ifRhg8',
    },
    {
      tema: 'Estructura narrativa',
      referencia:
        'Dani Parker. (2021). CÓMO CONTAR UNA HISTORIA EN CÓMIC - DANI PARKER. [Archivo de vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0VeEI0DqVPo52',
    },
    {
      tema: 'Personajes',
      referencia:
        'Acevedo, J. (2021). Para hacer historietas. (8 ed.). IEP Ediciones.',
      tipo: 'Capítulo 2',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/195687',
    },
  ],
  glosario: [
    {
      termino: 'Ángulo',
      significado:
        'perspectiva visual desde la cual se presenta una escena en el cómic, como el ángulo picado o contrapicado.',
    },
    {
      termino: 'Antagonista',
      significado:
        'personaje que se opone al protagonista, generando conflictos dentro de la historia.',
    },
    {
      termino: 'Guion',
      significado:
        'texto que contiene los diálogos, descripciones y acciones que se desarrollarán en una historieta o cómic.',
    },
    {
      termino: 'Historieta',
      significado:
        'narrativa visual que combina texto e imágenes secuenciales para contar una historia, también conocida como cómic.',
    },
    {
      termino: 'Narrativa gráfica',
      significado:
        'forma de contar una historia mediante la integración de imágenes y texto en una secuencia visual.',
    },
    {
      termino: 'Onomatopeya',
      significado:
        'palabra que imita sonidos, comúnmente utilizada en cómics para representar ruidos, explosiones o efectos de sonido.',
    },
    {
      termino: 'Plano',
      significado:
        'distancia o relación visual que el lector tiene con los personajes y el escenario, como el primer plano o plano general.',
    },
    {
      termino: 'Protagonista',
      significado:
        'personaje principal que lleva el hilo narrativo de la historia, generalmente en busca de alcanzar sus objetivos.',
    },
    {
      termino: 'Secuencia',
      significado:
        'sucesión de viñetas que forman una acción continua dentro de la trama de una historieta.',
    },
    {
      termino: 'Viñeta',
      significado:
        'cada uno de los recuadros que componen una página de historieta, donde se representan acciones o diálogos.',
    },
  ],
  referencias: [
    {
      referencia:
        'González Zaragoza, N. (Sin fecha). El cómic, orígenes y evolución.',
      link: '',
    },
    {
      referencia:
        'Gubern, R. (1972). El lenguaje de los cómics. Barcelona, Península.',
      link: '',
    },
    {
      referencia:
        'McCloud, S. (2005). Entender el cómic: El arte invisible. Bilbao, Astiberri.',
      link: '',
    },
    {
      referencia:
        'McCloud, S. (2007). Hacer cómics: secretos narrativos del cómic, el manga y la novela gráfica. Bilbao, Astiberri.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (Sin fecha). Hábitos de lectura, asistencia a bibliotecas y consumo de libros en Colombia.',
      link: '',
    },
    {
      referencia:
        'Oficina Comercial de ProChile en Bogotá. (2012). Estudio de mercado servicios editoriales en Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernán Mauricio Rodríguez',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
