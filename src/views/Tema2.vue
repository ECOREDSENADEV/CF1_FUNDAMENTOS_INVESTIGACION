<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El proyecto de investigación
    
    p.mb-5 Un proyecto puede definirse como un conjunto de ideas estructuradas, planificadas y orientadas a brindar soluciones a una necesidad identificada en un contexto específico, dentro de un período de tiempo determinado. En el ámbito académico y técnico, los proyectos se diseñan con un enfoque metodológico que depende de sus objetivos, su alcance y el tipo de problema que se desea abordar.

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") PUn proyecto de investigación se distingue por surgir a partir de una situación problemática que requiere ser comprendida, explicada o transformada. El punto de partida es una pregunta de investigación, también llamada pregunta problematizadora, que orienta todo el proceso investigativo y marca la ruta metodológica a seguir. Esta pregunta debe ser abordada y respondida mediante un trabajo riguroso, planificado y coherente, que permita obtener nuevos conocimientos o soluciones relevantes.
    
    p.mb-5 La calidad y pertinencia de un proyecto de investigación dependen en gran medida de su planeación y del seguimiento de una serie de etapas definidas, cada una con acciones específicas que garantizan el desarrollo ordenado del proceso investigativo. A continuación, se presentan las etapas del proyecto de investigación y las acciones que las componen:

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-6.order-lg-1
              h5 Preparación de la investigación
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle.fa-xs.bg-color-12
                  p.mb-0 Delimitación del tema: acotar el problema de estudio según el contexto. 
                li.mb-2.d-flex
                  i.fas.fa-circle.fa-xs.bg-color-12
                  p.mb-0 Revisión de información previa: búsqueda y análisis de antecedentes teóricos y prácticos. 
                li.mb-2.d-flex
                  i.fas.fa-circle.fa-xs.bg-color-12
                  p.mb-0 Determinación del diseño teórico: definición del enfoque, tipo de investigación y métodos. 
                li.mb-2.d-flex
                  i.fas.fa-circle.fa-xs.bg-color-12
                  p.mb-0 Elaboración del proyecto: estructuración del documento que orientará el proceso.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-6.order-lg-1
              h5 Ejecución de la investigación
              p Aplicación de los métodos seleccionados para la recolección de datos (entrevistas, encuestas, observaciones, experimentos, entre otros). Esta etapa busca generar evidencias que respondan a la pregunta de investigación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-6.order-lg-1
              h5 Procesamiento de la información
              p Análisis de los datos obtenidos, los cuales pueden ser cuantificados, calificados e interpretados. Esta etapa permite identificar patrones, relaciones o conclusiones relevantes para el problema abordado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-6.order-lg-1
              h5 Redacción de informes
              p Sistematización del proceso y los hallazgos en un documento final. El informe debe ser claro, coherente, conciso y contener las conclusiones y recomendaciones derivadas del estudio.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tema e idea de investigación
    
    p.mb-5 La idea de investigación nace de una inquietud intelectual, de una experiencia significativa o de una necesidad del entorno que demanda una solución. Para Hernández, Fernández y Baptista (2014), la idea de investigación es <b>“la primera aproximación a la realidad que se pretende investigar; puede surgir de fuentes diversas como la experiencia, la observación de hechos concretos o la revisión bibliográfica”</b> (p. 28). En este sentido, la idea no parte del vacío, sino de una intención por comprender, transformar o explicar una situación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.tarjeta.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Una característica esencial de los temas e ideas en la investigación formativa es que deben guardar pertinencia con el contexto socioproductivo, permitiendo generar conocimiento aplicable a la solución de problemáticas concretas. La investigación aplicada, común en la formación técnica y tecnológica, se orienta hacia la utilización del conocimiento científico para resolver problemas prácticos en contextos específicos.

        p(data-aos="fade-left") Además, es importante diferenciar entre el tema entendido como un campo amplio de interés y la idea que representa una focalización del tema hacia un problema abordable mediante investigación. El tema agrupa aspectos relacionados con una realidad, mientras que la idea organiza y delimita esos aspectos con base en una necesidad investigativa.
    
        
    .bg-color-9.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La búsqueda de información primaria y secundaria es parte fundamental del proceso, ya que permite sustentar la investigación y afinar el planteamiento del problema. La triangulación entre fuentes documentales, teóricas y empíricas otorga solidez al trabajo investigativo.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Enfoques de la investigación

    p.mb-5 El enfoque metodológico define el modo en que se abordará la pregunta de investigación y orienta la selección de técnicas para la recolección y análisis de datos. De acuerdo con Creswell (2014), existen tres enfoques principales: cualitativo, cuantitativo y mixto, cada uno con características distintas que se adaptan a diferentes tipos de problemas y objetivos investigativos.

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-6.order-lg-1
              h5 Cualitativo
              p Se orienta a comprender significados, percepciones, experiencias y construcciones sociales que dan forma a la realidad. Analiza los fenómenos en su contexto natural, con énfasis en la perspectiva de los participantes y sin intención de generalizar estadísticamente, sino de alcanzar una comprensión profunda y contextualizada (Flick, 2015, p. 9).

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-6.order-lg-1
              h5 Cuantitativo
              p Se basa en la medición objetiva de variables y en la aplicación de procedimientos estandarizados para recolectar y analizar datos. Su propósito es probar hipótesis, establecer patrones de comportamiento y alcanzar resultados replicables que permitan formular generalizaciones con base en la evidencia empírica (Hernández, Fernández y Baptista, 2014, p. 6).
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-6.order-lg-1
              h5 Mixto
              p Integra elementos de los enfoques cualitativo y cuantitativo en un mismo estudio, con el fin de lograr una visión más completa del fenómeno investigado. Esta combinación permite abordar la complejidad de los problemas desde diferentes ángulos, aprovechando tanto el rigor numérico como la riqueza interpretativa (Creswell y Plano Clark, 2018, p. 45).

    p.mb-5 La elección del enfoque debe responder al tipo de conocimiento que se desea construir. Un problema interpretativo exige una perspectiva cualitativa, mientras que uno que requiere medición demanda un enfoque cuantitativo. En investigaciones complejas, el diseño mixto ofrece ventajas al integrar distintas formas de evidencia.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 El problema y la pregunta de investigación

    p.mb-5 A continuación, se presenta un video que aborda el proceso de formulación del problema de investigación: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 A continuación, se expone un ejemplo que permite comprender cómo se estructura una pregunta de investigación clara, contextualizada y metodológicamente viable.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.p-4(data-aos="fade-left")
          h5 Ejemplo:
          p ¿Cuáles son los factores que inciden en la deserción escolar de estudiantes entre 12 y 16 años en instituciones rurales del municipio de Riosucio, Chocó? Una vez formulada, la pregunta permite establecer el enfoque metodológico, los objetivos, el tipo de estudio, los instrumentos de recolección de información y los criterios de análisis. Antes de definirla, es importante revisar fuentes confiables, leer estudios previos y conocer a profundidad el contexto. Desde esta mirada, investigar no es solo un requisito académico, sino una forma de aprender haciendo, de construir conocimiento desde la práctica, y de contribuir de forma significativa al desarrollo del país.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Objetivos y alcance de investigación

    .bloque-texto-a.color-acento-contenido.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.order-2
          figure
          img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in") 
        .col-lg-9.order-1.mb-3.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Antes de iniciar un proyecto investigativo, es fundamental establecer con claridad qué se pretende alcanzar. Los objetivos orientan el rumbo del estudio y delimitan su alcance, brindando una estructura lógica que permite transformar una pregunta en un proceso metodológico coherente.

    p.mb-5 A través de ellos, se concreta la intención investigativa, se definen las acciones a seguir y se proyecta el tipo de resultados que se esperan obtener. Esta planificación no solo fortalece la rigurosidad del trabajo, sino que facilita su ejecución y evaluación.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Objetivo general 
      
    p.mb-5 El objetivo general surge directamente de la pregunta de investigación y sintetiza la finalidad central del estudio. Su formulación orienta todas las decisiones metodológicas, desde la selección del enfoque hasta la manera en que se presentarán los hallazgos. Representa una guía estratégica que permite mantener la coherencia del proyecto en cada una de sus etapas. Los objetivos son expresiones concretas de lo que el investigador desea lograr con su estudio (Rojas, 2020, p. 61).

    .row.justify-content-center.mb-5
      .col-lg-10
        div.text-center.bg-color-4.p-5
          h5 ¿Cómo redactarlo correctamente?
          p Para estructurarlo de forma precisa y comprensible, se puede aplicar la siguiente fórmula:
          .contenedor
            .cajon.bg-color-8.tarjeta.align-content-center Verbo en infinitivo 
            .signo +
            .cajon.bg-color-13.tarjeta.align-content-center Objeto de estudio 
            .signo +
            .cajon.bg-color-14.tarjeta.align-content-center Contexto o condición 
            .signo +
            .cajon.bg-color-9.tarjeta.align-content-center Finalidad
    
    p.mb-5 A continuación, se describen estos  elementos fundamentales:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Verbo en infinitivo")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Verbo en infinitivo
            p Corresponde a la acción que el investigador desea realizar y debe ser expresado de forma clara, concreta y medible. Este verbo define la intención del objetivo y orienta el tipo de análisis que se realizará. 
            p <b>Ejemplos</b>: identificar, caracterizar, determinar, evaluar, comparar.
        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/13.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Objeto de estudio")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Objeto de estudio
            p Es el núcleo del objetivo. Se refiere al fenómeno, situación, proceso, población o variable que se va a investigar. Debe formularse con precisión para mantener el foco del estudio y garantizar su abordaje metodológico. 
            p <b>Ejemplos</b>: causas de deserción escolar, impacto del cambio climático, percepción sobre la salud mental.

        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/14.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Contexto o condición")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Contexto o condición
            p Delimita las circunstancias específicas del estudio: lugar, periodo, grupo poblacional o situación determinada. Aporta concreción al objetivo, evita generalidades y facilita su ejecución. 
            p <b>Ejemplos</b>: instituciones públicas de Soacha en 2024; jóvenes entre 15 y 18 años en colegios rurales.

        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/15.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Finalidad")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Finalidad
            p Explica el propósito que justifica el análisis. Es lo que se busca lograr con los resultados obtenidos. Permite orientar las acciones derivadas del estudio y vincular los hallazgos con una aplicación práctica o teórica.
            p <b>Ejemplos</b>: con el fin de diseñar estrategias de mejora institucional, con el fin de proponer acciones de intervención comunitaria.

        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/16.png', alt='Texto que describa la imagen')


    .bg-color-1.mb-5.tarjeta
      .px-4.px-md-5.py-4
        h5 Ejemplo de objetivo general
        p.mb-0 Analizar los factores que inciden en la deserción escolar de estudiantes entre 12 y 16 años en instituciones rurales del municipio de Riosucio, con el fin de proponer estrategias que fomenten su permanencia en el sistema educativo.

    p.mb-5 Ahora es momento de descomponer este objetivo para entender mejor cada uno de sus componentes y cómo contribuyen a una formulación clara y coherente:

    .tarjeta--container.row
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-10.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/17.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Verbo en infinitivo
        
        p <b>Analizar</b>: implica examinar de forma detallada los factores relacionados con la deserción escolar. Es un verbo adecuado para estudios analíticos o explicativos.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-9.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/18.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Objeto de estudio
        
        p <b>Los factores que inciden en la deserción escolar de estudiantes entre 12 y 16 años</b>: constituye el fenómeno central de la investigación, claramente delimitado.
    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-9.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/19.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Contexto o condición
        
        p <b>Instituciones rurales del municipio de Riosucio</b>: especifica el entorno geográfico e institucional del estudio, lo que permite contextualizar los resultados.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-10.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/20.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Finalidad
        
        p <b>Con el fin de proponer estrategias que fomenten su permanencia en el sistema educativo</b>: expresa el propósito aplicado del estudio.


    p.mb-5  Una vez definido el objetivo general, es fundamental descomponerlo en partes operativas que guíen el desarrollo del estudio. Es aquí donde entran los objetivos específicos, ya que permiten traducir la intención general en acciones concretas, organizadas y medibles.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Objetivos específicos
      
    .row.justify-content-center
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/21.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Los objetivos específicos descomponen el objetivo general en tareas puntuales, detallando con precisión lo que se debe hacer en cada etapa de la investigación. Funcionan como una hoja de ruta que orienta la recolección de datos, el análisis, la interpretación y la evaluación de resultados.
    
    p.mb-5 Para que cumplan su función, deben estar formulados con claridad, ser alcanzables y medibles, y mantener coherencia con el propósito central del estudio. Una redacción adecuada facilita la planificación del trabajo y asegura un desarrollo metódico y riguroso del proyecto.

    .bg-color-1.mb-5.tarjeta
      .px-4.px-md-5.py-4
        h5 ¿Cómo redactarlos correctamente?
        p.mb-0 Para construirlos de manera clara y estructurada, se puede aplicar la misma fórmula utilizada en el objetivo general, que combina un verbo en infinitivo, el objeto de estudio y el contexto. Esta estructura permite formular objetivos operativos, medibles y directamente relacionados con la intención del estudio.

    .titulo-con-imagen__fondo_2(data-aos="fade-right").mb-5
      h3.mb-0 Ejemplo aplicado

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-11.tarjeta.p-3.h-100(data-aos="fade-left")
          figure.mb-3
            img(src="@/assets/curso/tema2/23.svg", style="max-width: 50px", data-aos="zoom-in")
          p(data-aos="fade-left") Caracterizar las condiciones socioeconómicas de estudiantes desertores en zonas rurales de Riosucio, con base en registros académicos, para orientar estrategias educativas y sociales.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png" data-aos="zoom-in")
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-left")
        ul.lista-ul--color.mb-0
          li.mb-2.d-flex
            i.fas.fa-circle.fa-xs.bg-color-12
            p.mb-0 <b>Verbo en infinitivo</b>: caracterizar. 
          li.mb-2.d-flex
            i.fas.fa-circle.fa-xs.bg-color-12
            p.mb-0 <b>Objeto de estudio</b>: las condiciones socioeconómicas de los estudiantes que han abandonado sus estudios. 
          li.mb-2.d-flex
            i.fas.fa-circle.fa-xs.bg-color-12
            p.mb-0 <b>Contexto o condición</b>: en zonas rurales del municipio de Riosucio, con base en registros académicos.
          li.mb-2.d-flex
            i.fas.fa-circle.fa-xs.bg-color-12
            p.mb-0 <b>Finalidad</b>: para orientar estrategias educativas y sociales.
    
    p.mb-5 Este objetivo específico se deriva directamente del objetivo general y permite profundizar en una dimensión concreta del fenómeno investigado. Formular correctamente los objetivos específicos garantiza una ruta de trabajo clara, facilita la ejecución del proyecto y permite evaluar con mayor precisión los logros alcanzados.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/24.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-3.px-4.py-5(data-aos="fade-left")
          p.mb-0 Para redactar objetivos claros, coherentes y adecuados al nivel del estudio, es recomendable apoyarse en herramientas que orienten el uso preciso de los verbos. En este sentido, la Taxonomía de Bloom resulta especialmente útil, ya que clasifica los niveles del pensamiento cognitivo, desde los más básicos hasta los más complejos, y sugiere verbos alineados con cada uno. En el material complementario se encuentra disponible esta taxonomía, la cual puede consultarse para seleccionar los verbos más adecuados según el propósito de cada objetivo de investigación.
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Niveles de la investigación
    
    p.mb-5 Los niveles de investigación hacen referencia al grado de profundidad con el que se aborda el fenómeno de estudio. Estos niveles determinan el tipo de información que se recopila, la manera en que se analiza y la complejidad de las conclusiones que pueden alcanzarse. 

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-7(data-aos="fade-left")
        .row.align-items-center.mb-3
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A medida que aumenta la profundidad investigativa, también lo hacen las exigencias en términos de análisis, interpretación y rigor metodológico, ya que el nivel de investigación guarda estrecha relación con los objetivos, pues estos definen el tipo de estudio y la complejidad de los métodos a utilizar (Calderón & Vallejo, 2021, p. 92).

        p(data-aos="fade-left") Esta relación es bidireccional: los objetivos delimitan el nivel de profundidad del estudio, pero al mismo tiempo, el nivel elegido condiciona el diseño metodológico y el tipo de resultados que se pueden obtener. A continuación, se presentan los principales niveles de investigación, junto con sus características:
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/27.png")
            .col-lg-6.order-lg-1
              h5 Exploratorio
              p Permite acercarse por primera vez a un fenómeno poco estudiado. Involucra acciones como rastrear antecedentes, formular preguntas iniciales, observar, comparar e indagar. Su finalidad es identificar tendencias, factores clave o nuevas preguntas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/28.png")
            .col-lg-6.order-lg-1
              h5 Descriptivo
              p Busca detallar cómo es un fenómeno en particular. Recolecta y organiza información para describir características, comportamientos o condiciones de un hecho. Utiliza encuestas, observación sistemática y análisis de registros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/29.png")
            .col-lg-6.order-lg-1
              h5 Interpretativo
              p Requiere la comprensión de significados, creencias o percepciones asociadas a un fenómeno. Implica habilidades analíticas para descubrir cómo las personas o grupos entienden su realidad. Es común en estudios cualitativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/30.png")
            .col-lg-6.order-lg-1
              h5 Analítico
              p Va más allá de la descripción: examina causas, relaciones y componentes del fenómeno para estructurar una comprensión más profunda. Se apoya en marcos teóricos y categorizaciones.

          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/31.png")
            .col-lg-6.order-lg-1
              h5 Explicativo
              p Pretende identificar las causas de los fenómenos y establecer relaciones de causalidad. Utiliza métodos rigurosos, diseños experimentales o correlacionales, y pruebas de hipótesis.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/32.png")
            .col-lg-6.order-lg-1
              h5 Argumentativo
              p Contrasta hipótesis, construye razonamientos fundamentados en la teoría y demuestra relaciones entre variables o ideas. Es característico de investigaciones con enfoque crítico o filosófico.
    
    p.mb-5 Como señala Hernández Sampieri (2014), “la elección del nivel de investigación se basa en los propósitos del estudio, el tipo de pregunta planteada y el conocimiento existente sobre el tema” (p. 61).

    separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Métodos de investigación

    .bloque-texto-a.color-acento-contenido.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.order-2
          figure
          img(src="@/assets/curso/tema2/33.svg", data-aos="zoom-in") 
        .col-lg-9.order-1.mb-3.mb-lg-0
          .bloque-texto-a__texto.p-4
            p El término método proviene del griego metá (más allá) y hodós (camino), lo que puede interpretarse como “el camino para alcanzar un propósito”. En el contexto investigativo, los métodos representan el conjunto de procedimientos organizados, sistemáticos y coherentes que permiten alcanzar los objetivos planteados y obtener conocimientos válidos y fundamentados.

    p.mb-5 Los <b>métodos de investigación</b> articulan la teoría con la práctica, y permiten orientar la recolección, el análisis y la interpretación de los datos. Como señalan Hernández et al. (2014), “el método es la vía para recolectar, analizar y presentar información que responda a una pregunta de investigación y genere conocimiento útil” (p. 97). A continuación, se presenta una tabla con los métodos más utilizados en investigación y sus principales características:

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/34.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Científico")
            p.ms-5 Integra observación, formulación de hipótesis, experimentación y validación de teorías. Requiere secuencia lógica y razonamiento riguroso para obtener conclusiones verificables.
          div(titulo="Experimental")
            p.ms-5 Permite establecer relaciones de causa y efecto. Controla y manipula variables (como edad, nivel educativo, etc.) para observar sus efectos sobre otras.
          div(titulo="Teórico")
            p.ms-5 Utiliza el razonamiento lógico para interpretar fenómenos, analizar conceptos y construir modelos explicativos o teorías. Es clave en investigaciones conceptuales.
          div(titulo="Estadístico")
            p.ms-5 Se enfoca en el análisis cuantitativo de datos. Permite seleccionar muestras, procesar información y realizar inferencias válidas a partir de datos numéricos.Describe el enfoque, método, técnicas, instrumentos, población, muestra y procedimientos utilizados.
          div(titulo="Empírico")
            p.ms-5 Basado en la experiencia directa del investigador. Implica observación, entrevistas, encuestas, y registro de datos sensoriales o culturales para conocer la realidad.
    
    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/35.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Etnográfico")
            p.ms-5 Busca comprender fenómenos sociales desde dentro. El investigador se inserta en el contexto y realiza observación participante para interpretar significados culturales.
          div(titulo="Hermenéutico")
            p.ms-5 Enfocado en la interpretación de textos, discursos o prácticas sociales. Utilizado para estudiar el comportamiento humano desde una perspectiva subjetiva y simbólica.
          div(titulo="Fenomenológico")
            p.ms-5 Explora experiencias vividas por los sujetos. Describe cómo se perciben los fenómenos desde la conciencia individual, con énfasis en lo subjetivo y cualitativo.
          div(titulo="Histórico")
            p.ms-5 Analiza hechos y procesos del pasado para comprender su evolución, causas y consecuencias. Utiliza fuentes documentales y cronologías para construir interpretaciones.
          div(titulo="Investigación-Acción Participativa (IAP)")
            p.ms-5 Involucra activamente a los participantes en el proceso investigativo. Busca transformar la realidad desde la acción colectiva, con el investigador como facilitador del cambio.
    
    p.mb-5 La elección del método debe ser coherente con el enfoque, el tipo de problema, los objetivos y la naturaleza de los datos que se esperan obtener. No todos los métodos aplican a todos los estudios, y muchas veces es necesario combinar varios para lograr una comprensión más amplia del fenómeno.
    
    separador
    
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 La hipótesis
    
    p.mb-5 La hipótesis es una proposición que plantea una posible explicación o respuesta a la pregunta de investigación. Es una afirmación tentativa que puede ser comprobada o refutada a partir del análisis de los datos recolectados. Como explican Hernández, Fernández y Baptista (2014), “una hipótesis es una suposición fundamentada que establece una relación entre dos o más variables, y cuya validez se somete a prueba empírica” (p. 130).

    .bloque-texto-g.color-primario.bg-color-8.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/36.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La formulación de hipótesis depende del nivel de la investigación. En estudios exploratorios o descriptivos, no es necesario plantear hipótesis, ya que el objetivo es identificar características o patrones. Sin embargo, en investigaciones explicativas, experimentales o correlacionales, las hipótesis son fundamentales porque permiten verificar relaciones de causa-efecto o asociación entre variables.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos comunes de hipótesis
    
    p.mb-5 Existen diferentes tipos de hipótesis que se utilizan según el enfoque y los objetivos del estudio. Cada una cumple una función específica dentro del proceso investigativo, ya sea describiendo, relacionando o explicando fenómenos. A continuación, se presentan los tipos más comunes de hipótesis que orientan el análisis de los datos y la toma de decisiones en la investigación:

    .row.justify-content-center
      .col-lg-2.mb-3.mb-lg-0
        h5.bg-color-15.p-3.text-center.mb-0 Hipótesis descriptiva
        p.mb-0.bg-color-1.p-4.pst Predice un dato o valor esperado.
      .col-lg-2.mb-3.mb-lg-0
        h5.bg-color-13.p-3.text-center.mb-0.pst-2 Hipótesis correlacional
        p.mb-0.bg-color-4.p-3.pst Establece una relación entre dos variables.
      .col-lg-2.mb-3.mb-lg-0
        h5.bg-color-15.p-3.text-center.mb-0 Hipótesis <br> causal
        p.mb-0.bg-color-1.p-3.pst Plantea que una variable influye o determina a otra.
      .col-lg-2.mb-3.mb-lg-0
        h5.bg-color-13.p-3.text-center.mb-0.pst-2 Hipótesis <br> nula (H₀)
        p.mb-0.bg-color-4.p-3.pst Afirma que no hay relación entre las variables.
      .col-lg-2.mb-3.mb-lg-0
        h5.bg-color-15.p-3.text-center.mb-0 Hipótesis alternativa (H₁)
        p.mb-0.bg-color-1.p-3.pst Sostiene que sí existe una relación significativa.

    p.mb-5 Un ejemplo basado en la pregunta de investigación mencionada anteriormente seria:

    .bg-color-10.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/37.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Hipótesis</b>: la mayoría de los casos de deserción escolar en estudiantes entre 12 y 16 años en instituciones rurales del municipio de Riosucio se relacionan con dificultades económicas y falta de transporte escolar.
    
    p.mb-5 Esta hipótesis podría verificarse mediante revisión de registros académicos, análisis estadístico y entrevistas con actores educativos del contexto rural.

    separador
    
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.8 El marco teórico
    
    p.mb-5 El marco teórico constituye la base conceptual sobre la cual se sustenta todo estudio investigativo. Consiste en un conjunto organizado de antecedentes, conceptos, teorías y enfoques que permiten comprender el problema de investigación, contextualizarlo y justificarlo con fundamentos científicos reconocidos. Este componente brinda solidez al trabajo, al establecer un diálogo entre el fenómeno estudiado y el conocimiento existente, lo que facilita su interpretación y análisis en el momento de presentar los resultados. El marco teórico ofrece una perspectiva analítica desde la cual interpretar los hallazgos de la investigación y relacionarlos con el conocimiento disponible. (Creswell & Creswell, 2023, p. 98).

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-16.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/38.png', alt='')
            .col-lg.order-lg-1
              .p-4
                p Para construirlo, es necesario tener en cuenta los siguientes elementos:
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 La pregunta de investigación.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 El objetivo general.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Los objetivos específicos.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Las variables o conceptos clave.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 El enfoque y los métodos seleccionados.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Ejemplo aplicado
    
    p.mb-5 Si la pregunta de investigación es: ¿Cuáles son los factores que inciden en la deserción escolar de estudiantes entre 12 y 16 años en instituciones rurales del municipio de Riosucio?, el marco teórico podría organizarse en los siguientes ejes:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/39.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Concepto de deserción escolar: definición, tipos y consecuencias.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Factores sociales y económicos asociados a la permanencia escolar.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Acceso, calidad e infraestructura en la educación rural.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Políticas públicas de retención escolar en Colombia.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Programas de apoyo institucional y comunitario a estudiantes en riesgo.
    
    p.mb-5 Para su elaboración es fundamental consultar fuentes confiables y actualizadas, como artículos científicos, libros especializados, informes técnicos, bases de datos académicas y documentos institucionales. Un marco teórico bien estructurado permite al investigador sustentar sus decisiones, delimitar el alcance del estudio y orientar el análisis de los resultados.

    separador
    
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.9 Técnicas de recolección de información
    .block
      .bloque-texto-a.color-acento-contenido.p-4.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0.order-2
            figure
            img(src="@/assets/curso/tema2/40.svg", data-aos="zoom-in") 
          .col-lg-9.order-1.mb-3.mb-lg-0
            .bloque-texto-a__texto.p-4
              p Las técnicas de recolección de información son procedimientos específicos que permiten obtener datos relevantes para responder la pregunta de investigación. Estas técnicas se concretan a través de instrumentos como encuestas, entrevistas, registros u observaciones, cuya selección depende del enfoque investigativo, el nivel de análisis, el método aplicado y el tipo de información requerida.
    
    p.mb-5 Según Hernández et al. (2014), “la elección de las técnicas de recolección debe ser coherente con los objetivos de estudio, el tipo de datos que se desean obtener y el diseño metodológico adoptado” (p. 148). A continuación, se presenta una tabla que resume las técnicas más comunes según el enfoque de investigación:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Técnicas e instrumentos según el enfoque
        
        .tabla-a.color-acento-botones.mb-5.tab 
          table
            thead
              tr.text-center
                th.bg-color-18 Enfoque
                th.bg-color-18 Técnicas comunes
                th.bg-color-18 Instrumentos asociados
            tbody
              tr
                td Cuantitativo
                td Permiten medir variables numéricamente y aplicar análisis estadísticos.
                td 
                  | • Encuestas estructuradas 
                  br
                  | • Cuestionarios cerrados 
                  br
                  | • Pruebas objetivas 
                  br
                  | • Observaciones con listas de cotejo
              tr
                td Cualitativo
                td Se orientan a comprender significados, percepciones y contextos.
                td 
                  | • Entrevistas semiestructuradas o abiertas 
                  br
                  | • Observación participante 
                  br
                  | • Historias de vida 
                  br
                  | • Diarios de campo 
                  br
                  | • Conversatorios 
                  br
                  | • Talleres colaborativos
              tr
                td Mixto
                td Integra estrategias de ambos enfoques, enriqueciendo la comprensión del fenómeno.
                td 
                  | • Combinación de encuestas y entrevistas 
                  br
                  | • Registros observacionales múltiples 
                  br
                  | • Formularios abiertos y cerrados

          
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Relación con el nivel, método y análisis

    p.mb-5 La elección de las técnicas también se ve influida por:
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/41.svg" alt="" style="width: 90px")
              h5.text-center Nivel de investigación
              p.mb-0.text-center Exploratorio, descriptivo, analítico, explicativo, interpretativo, argumentativo
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/42.svg" alt="" style="width: 90px")
              h5.text-center Método utilizado
              p.mb-0.text-center Científico, experimental, correlacional, estadístico, etnográfico, hermenéutico, fenomenológico, histórico, IAP
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/43.svg" alt="" style="width: 90px")
              h5.text-center Tipo de análisis
              p.mb-0.text-center Cuantitativo (medición y estadística), cualitativo (interpretación), mixto (combinación)
        p.mb-5 Como indica Flick (2015), la calidad de los datos no depende únicamente del tipo de técnica elegida, sino del grado de coherencia con el diseño metodológico general y del rigor con el que se apliquen (p. 62).
    
    separador
    
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.10 Universo y muestra
    
    .bg-color-11.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/44.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el contexto de la investigación estadística, el universo o población se refiere al conjunto total de elementos, personas, objetos o eventos que comparten una o varias características definidas y que son de interés para el estudio. Este universo constituye el referente principal del que se desea obtener información o extraer conclusiones.
    
    p.mb-5 De acuerdo con Calderón y Vallejo (2021), “la población estadística representa el conjunto de unidades de análisis con características comunes, sobre el cual se desea hacer inferencias a partir del estudio de una parte de él” (p. 105). Los tipos de universo son:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Universo finito")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Universo finito
            p Está conformado por un número limitado y cuantificable de elementos.
            p <b>Ejemplos</b>: estudiantes de una institución educativa.
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/45.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Universo infinito")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Universo infinito
            p Está compuesto por un número indeterminado de elementos, difícil o imposible de contar.
            p <b>Ejemplos</b>: número de microorganismos en una muestra de agua.
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/46.png', alt='Texto que describa la imagen')
    
    p.mb-5 Aun cuando el universo sea extenso o aparentemente infinito, es posible aplicar técnicas estadísticas para hacer estimaciones válidas y representar sus características mediante una muestra.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Muestra estadística
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-16.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/47.png', alt='')
            .col-lg.order-lg-1
              .p-4
                p La muestra es un subconjunto representativo del universo, seleccionado de acuerdo con criterios previamente definidos. Su análisis permite inferir comportamientos, características o patrones del conjunto total sin necesidad de estudiar a todos sus integrantes.
    
    p.mb-5 Para que la muestra sea válida, debe estar compuesta por elementos que compartan características esenciales y responder a una lógica metodológica que garantice su representatividad. La selección de los participantes implica definir criterios de inclusión y exclusión, así como identificar variables clave que orienten el análisis. Una muestra bien diseñada permite que los resultados del estudio puedan extrapolarse a la población con un grado aceptable de precisión y confianza (Hernández, Fernández & Baptista, 2014, p. 232).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Cálculo de la muestra
    
    p.mb-5 Existen dos tipos principales de fórmulas estadísticas para el cálculo del tamaño muestral, dependiendo del tipo de población:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-10.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/48.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Finita
        
        p.mb-0 Se usa cuando la población total es conocida y delimitada.
        p <b>Consideraciones</b>: aplica corrección por tamaño.


      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.bg-color-9.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema2/49.svg', alt='Texto que describa la imagen')
          .col-8.align-content-end 
            h2 Infinita
        
        p.mb-0 Se emplea cuando la población es muy grande o no se conoce con exactitud.
        p <b>Consideraciones</b>: no requiere corrección por población.

    p.mb-5 El uso correcto de estas fórmulas depende de factores como el nivel de confianza, el margen de error permitido, la proporción esperada de respuestas y la variabilidad de los datos.

    separador
    
    #t_2_11.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.11 Conclusiones
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/50.png', alt='')
            .col-lg
              .p-4
                p Las conclusiones constituyen el cierre del proceso investigativo. En este apartado se presentan los hallazgos más relevantes del estudio, derivados del análisis de los datos obtenidos. No se trata únicamente de enumerar resultados, sino de interpretarlos, compararlos con los objetivos y vincularlos con el problema de investigación y la pregunta inicial.

    p.mb-5 Según Hernández, Fernández y Baptista (2022), “las conclusiones deben expresar de forma clara qué se descubrió en la investigación y cómo esos descubrimientos responden a los objetivos planteados” (p. 279). Por ello, su redacción debe partir de una síntesis argumentada de los resultados obtenidos, sin repetir literalmente lo dicho en el desarrollo del informe.


    .row.justify-content-center.mb-3
      .col-lg-12
        .bg-color-11.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/51.png', alt='')
            .col-lg.order-lg-1
              .px-5.py-4
                p ¿Qué deben contener las conclusiones?
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Una síntesis analítica de los resultados.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Relación directa con los objetivos (general y específicos).
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Respuesta clara a la pregunta de investigación.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Reflexiones finales sobre el proceso y sus aprendizajes.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Identificación del aporte del proyecto al conocimiento del área.
                  li.mb-0.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-17
                    p.mb-0 Posibles recomendaciones o implicaciones para futuras investigaciones.

    p.mb-5 Además, es conveniente que las conclusiones evidencien cómo el proyecto contribuye a la comprensión o solución de la problemática abordada y abre nuevas rutas para la indagación o aplicación en contextos similares.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
