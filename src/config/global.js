export default {
  global: {
    Name: 'Fundamentos de investigación',
    Description:
      'Este componente formativo promueve el desarrollo de competencias investigativas mediante la formulación y ejecución de proyectos orientados a resolver problemáticas reales del entorno. A través de metodologías activas, el aprendiz identifica necesidades, plantea preguntas, define objetivos, aplica técnicas de recolección de información y construye conclusiones que fortalecen su desempeño en contextos laborales y académicos, articulando conocimiento técnico y pensamiento crítico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'La importancia de investigar en el mundo del trabajo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El proyecto de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tema e idea de investigación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Enfoques de la investigación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'El problema y la pregunta de investigación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Objetivos y alcance de investigación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Niveles de la investigación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Métodos de investigación',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'La hipótesis',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'El marco teórico',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Técnicas de recolección de información',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Universo y muestra',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Conclusiones',
            hash: 't_2_11',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fuentes primarias y secundarias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Búsqueda de información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Informe de investigación',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/dist.pdf',
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
      tema: 'La importancia de investigar en el mundo del trabajo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Importancia y aplicación de la investigación: introducción. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DvYrv4kCFI8&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA ',
    },
    {
      tema: 'Enfoques de la investigación',
      referencia:
        'Cejas, M, Liccioni, E., Aldaz, S., Murillo, M., y Venegas, G. (2023). Enfoque cuantitativo y cualitativo: Una mirada de los métodos mixtos. Fundación Editorial de la Universidad Nacional Experimental de Los Llanos Occidentales Ezequiel Zamora (FEDUEZ).',
      tipo: 'Documento',
      descarga: 'downloads/Enfoque-cuantitativo-cualitativo-metodo-mixto.pdf',
    },
    {
      tema: 'El proyecto de investigación',
      referencia:
        'Instituto de Investigación Sanitaria La Fe de Valencia. (2020). ¿Qué es un proyecto de investigación?. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yLlxyZ9ZxHk&ab_channel=InstitutodeInvestigaci%C3%B3nSanitariaLaFedeValencia ',
    },
    {
      tema: 'El problema y la pregunta de investigación',
      referencia:
        'Ordoñez, L. (2022). Caja de herramientas. Las claves de la producción de conocimiento. Claves para plantear preguntas de investigación. Universidad del Rosario.',
      tipo: 'Documento ',
      descarga: 'downloads/Claves-para-plantear-preguntas-de-investigacion.pdf',
    },
    {
      tema: 'Objetivos y alcance de investigación',
      referencia:
        'LA PROFE MÓNICA. (2023). ¡Superfórmula! para redactar OBJETIVOS / Objetivos generales / objetivos específicos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DQlp0DvPBwU&ab_channel=LAPROFEM%C3%93NICA ',
    },
    {
      tema: 'Objetivos y alcance de investigación',
      referencia:
        'Eduteka. (s.f.). La taxonomía de bloom y sus actualizaciones.',
      tipo: 'Documento',
      descarga: 'downloads/TaxonomiaBloomCuadro.pdf',
    },
    {
      tema: 'Métodos de investigación',
      referencia:
        'Maya, E. (2014). Métodos y técnicas de investigación. Universidad Nacional Autónoma de México',
      tipo: 'Documento ',
      descarga: 'downloads/metodos_y_tecnicas.pdf',
    },
    {
      tema: 'Técnicas de recolección de información',
      referencia:
        'Medina, M., Rojas, R., Bustamante, W., Loaiza, R., Martel, C., y Castillo, R. (2023). Metodología de la investigación: Técnicas e instrumentos de investigación. Instituto Universitario de Innovación Ciencia y Tecnología Inudi Perú.',
      tipo: 'Documento',
      descarga: 'downloads/80-Metodologi_investigacion.pdf',
    },
    {
      tema: 'información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2024). Fuentes de Información - Parte I [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=e_T-WWyXUbE&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA ',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Fuentes de información parte II. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=kHaL5F-GF0E&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA ',
    },
    {
      tema: 'Búsqueda de información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Búsqueda y recolección de información bibliográfica [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=TITYCfFG1os&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Búsqueda de información',
      referencia:
        'Biblioteca Sena. (2025). Conozca el Sistema de Bibliotecas SENA. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=o9RKBEFvLaY&ab_channel=BibliotecaSena ',
    },
    {
      tema: 'Informe de investigación',
      referencia:
        'Sistema de Bibliotecas SENA. (2020). Instructivo uso del estilo APA 7ª edición. ',
      tipo: 'Documento ',
      descarga: 'downloads/InstructivoAPA.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Conclusiones',
      significado:
        'resultados interpretativos del estudio que responden a la pregunta de investigación, vinculando hallazgos con los objetivos y el problema abordado.',
    },
    {
      termino: 'Enfoque cualitativo',
      significado:
        'estrategia investigativa que busca comprender significados y percepciones desde la experiencia de los participantes, sin intención de generalización.',
    },
    {
      termino: 'Enfoque cuantitativo',
      significado:
        'método basado en la medición numérica, el análisis estadístico y la búsqueda de patrones o relaciones entre variables.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'proposición tentativa que plantea una posible respuesta a la pregunta de investigación y puede ser verificada o refutada mediante los datos.',
    },
    {
      termino: 'Investigación',
      significado:
        'proceso sistemático orientado a resolver problemas, generar conocimientos nuevos y proponer soluciones a partir del análisis riguroso de información.',
    },
    {
      termino: 'Marco teórico',
      significado:
        'conjunto de conceptos, teorías y antecedentes que sustentan el estudio, permiten contextualizar el problema y guían el análisis de los resultados.',
    },
    {
      termino: 'Método',
      significado:
        'conjunto ordenado de procedimientos que orientan la recolección, análisis e interpretación de datos para alcanzar los objetivos investigativos.',
    },
    {
      termino: 'Pregunta de investigación',
      significado:
        'interrogante central que guía todo el proceso investigativo y delimita el enfoque, los objetivos, la metodología y el análisis.',
    },
    {
      termino: 'Proyecto',
      significado:
        'conjunto organizado de actividades y recursos que buscan alcanzar un objetivo específico en un tiempo determinado, relacionado con una necesidad.',
    },
    {
      termino: 'Técnicas de recolección',
      significado:
        'procedimientos específicos para obtener información relevante, como encuestas, entrevistas u observaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, J., & Vallejo, M. (2021). Metodología de la investigación aplicada (2.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Creswell, J. W. (2014). Research design: Qualitative, quantitative, and mixed methods approaches (4th ed.). SAGE Publications.  ',
      link:
        'https://www.google.com.co/books/edition/Research_Design/4uB76IC_pOQC?hl=es&authuser=1&gbpv=1&dq=Research+design:+Qualitative,+quantitative,+and+mixed+methods+approaches&printsec=frontcover',
    },
    {
      referencia:
        'Flick, U. (2015). Introducción a la investigación cualitativa (5.ª ed.). Morata. ',
      link:
        'https://edmorata.es/wp-content/uploads/2021/02/Flick.-Introduccion-a-la-investigacion-cualitativa_prw.pdf ',
    },
    {
      referencia:
        'Gutiérrez, A., & Montoya, L. (2021). Diseño y desarrollo de investigaciones aplicadas. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación (6.ª ed.). McGraw-Hill.  ',
      link:
        'https://apiperiodico.jalisco.gob.mx/api/sites/periodicooficial.jalisco.gob.mx/files/metodologia_de_la_investigacion_-_roberto_hernandez_sampieri.pdf',
    },
    {
      referencia:
        'Pérez, R. (2020). Fundamentos de investigación científica. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Rojas, M. (2020). Investigación cualitativa y cuantitativa en ciencias sociales. Ediciones Istmo',
      link: '',
    },
    {
      referencia:
        'Tamayo, M., & Tamayo, M. (2004). El proceso de la investigación científica (5.ª ed.). Limusa.  ',
      link:
        'https://books.google.com.mx/books?id=BhymmEqkkJwC&printsec=frontcover&hl=es#v=onepage&q&f=false',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
