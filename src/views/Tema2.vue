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

    .row.justify-content-center
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

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4.aling-content-end
          .col-4
            figure
              img(src='@/assets/curso/tema2/17.svg', alt='Texto que describa la imagen')
          .col-8 
            h5 Verbo en infinitivo
        
        p <b>Analizar</b>: implica examinar de forma detallada los factores relacionados con la deserción escolar. Es un verbo adecuado para estudios analíticos o explicativos.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/18.svg', alt='Texto que describa la imagen')
          
        h2.text-center Sterility leads to<br>susceptibility
        p Remember it’s called th


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
