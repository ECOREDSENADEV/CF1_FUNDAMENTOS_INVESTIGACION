<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fuentes de información
    
    .bloque-texto-g.color-primario.bg-color-8.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las fuentes de información son todos aquellos documentos, registros, materiales y datos confiables que contienen conocimientos relevantes para sustentar el desarrollo de una investigación. Su adecuado uso permite contextualizar el problema, construir el marco teórico, validar hallazgos y garantizar la rigurosidad del proyecto. Como señalan Gutiérrez y Montoya (2021), “la solidez de una investigación depende, en gran medida, de la calidad, actualidad y pertinencia de las fuentes consultadas” (p. 112).

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Fuentes primarias y secundarias

    p.mb-5 Para desarrollar una investigación con sustento riguroso, es fundamental identificar y utilizar fuentes de información confiables y pertinentes. Estas fuentes permiten construir el marco teórico, sustentar los argumentos y validar los hallazgos obtenidos. 

    .bg-color-3.mb-5.tarjeta
      .row.align-items-center.p-4.p-lg-0
        .col-lg-auto.order-2
          img(src="@/assets/curso/tema3/2.png", style="max-width: 210px").mx-auto
        .col-lg.order-1.p-5.mb-3.mb-lg-0
          p.mb-0 En este sentido, se clasifican en primarias y secundarias, según su origen, nivel de procesamiento y tipo de información que contienen. Conocer sus características facilitas al investigador seleccionar los materiales adecuados para su proyecto.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Fuentes primarias
      
    p.mb-5 A continuación, se presenta un pódcast  que explora en profundidad las características y el valor de las fuentes primarias de información, destacando su papel en la producción de conocimiento original dentro del ámbito académico.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/4.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Fuentes primarias"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Fuentes secundarias
      
    p.mb-5 Las fuentes secundarias son aquellas que han sido elaboradas a partir del análisis, interpretación o síntesis de fuentes primarias. Su función es ofrecer un enfoque crítico, comparativo o contextual sobre la información original, facilitando su comprensión e integración en el marco teórico.


    .titulo-con-imagen__fondo_2(data-aos="fade-right").mb-5
      h3.mb-0 Ejemplos de fuentes secundarias
    
    p.mb-5 Este tipo de fuentes se manifiesta en diversos formatos académicos y culturales que interpretan la información de origen primario.

    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/5.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Libros académicos que interpretan teorías o resultados.
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Críticas literarias o artísticas
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Artículos de revisión en revistas científicas
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Enciclopedias y diccionarios especializados
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Bibliografías comentadas
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-6
                    p.mb-0 Documentales que analizan hechos históricos
    
    .titulo-con-imagen__fondo_2(data-aos="fade-right").mb-5
      h3.mb-0 Características de las fuentes secundarias
    
    p.mb-5 Estas cualidades permiten reconocer su valor dentro del proceso investigativo y su utilidad en el desarrollo del análisis teórico.

    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/6.png', alt='')
            .col-lg.order-lg-1
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-7
                    p.mb-0 Tienen un enfoque interpretativo o evaluativo.
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-7
                    p.mb-0 Son útiles para fundamentar análisis teóricos.
                  li.mb-2.d-flex
                    i.fas.fa-circle.fa-xs.bg-color-7
                    p.mb-0 Facilitan la conexión entre diferentes hallazgos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Importancia en la investigación
      
    p.mb-5 La combinación adecuada de fuentes primarias y secundarias permite una visión más completa y crítica del objeto de estudio. Las fuentes primarias aportan datos directos, mientras que las secundarias permiten contextualizar y contrastar esos datos en el marco del conocimiento existente.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Búsqueda de información

    p La búsqueda y selección de información es una etapa esencial en todo proceso de investigación, ya que permite sustentar el marco teórico, contextualizar el problema y respaldar los argumentos del proyecto. No se trata únicamente de localizar textos, sino de aplicar criterios adecuados para determinar cómo, dónde y con qué parámetros acceder a información relevante y confiable. Una búsqueda documental efectiva requiere habilidades para definir términos clave, seleccionar fuentes apropiadas, filtrar resultados y validar la calidad de los contenidos (Gutiérrez & Montoya, 2021, p. 128).

    h5.mb-5 ¿Cómo realizar una búsqueda eficiente?: 

    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-8.tarjeta.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Delimitar el tema
                p.text-center Defi5ir con claridad el problema de investigación y los conceptos clave.
              .bg-color-8.tarjeta.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Seleccionar palabras clave
                p.text-center Iden5ificar términos asociados, sinónimos y descriptores temáticos.
              .bg-color-8.tarjeta.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-5 Elegir fuentes confiables 
                p.text-center Preferir bases de datos académicas, bibliotecas virtuales y repositorios institucionales.
              .bg-color-8.tarjeta.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-5 Aplicar filtros de búsqueda
                p.text-center Por idioma, fecha, tipo de documento, disciplina o autor.
              .bg-color-8.tarjeta.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-5 Evaluar los resultados
                p.text-center Verificar autoría, actualidad, pertinencia y respaldo institucional o editorial.
    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema3/7.png', alt='')



    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Recursos disponibles en el Sistema de Bibliotecas del SENA
      
    p.mb-5 El SENA cuenta con una Biblioteca Virtual que ofrece acceso a múltiples recursos de alta calidad para apoyar la investigación en todas las áreas del conocimiento:

    TabsC.color-primario(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Catálogo bibliográfico")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Catálogo bibliográfico
            p Contiene libros, revistas, videos y otros materiales físicos disponibles en las bibliotecas del SENA.
        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/13.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Bases de datos")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Bases de datos
            p Plataformas digitales con acceso a publicaciones científicas, académicas y técnicas en áreas como salud, administración, tecnología, agricultura, derecho, diseño, entre otras. Incluyen formatos como texto, video, imagen y audio.
        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/14.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Colección SENA / Repositorio institucional")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Colección SENA / Repositorio institucional
            p Conserva la producción académica e institucional del SENA: revistas, libros, cartillas, tesis, fotografías, videos, entre otros. Ideal para investigaciones aplicadas.
        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/15.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Portal de revistas SENA")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Portal de revistas SENA
            p Acceso a revistas científicas editadas por el SENA desde 2010. Contienen artículos, investigaciones y experiencias relevantes en formación profesional.
        
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/16.png', alt='Texto que describa la imagen')

    p.mb-5 Los otros recursos recomendados son: 

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-6.order-lg-1
              h5 Google Académico (Google Scholar)
              p Buscador especializado en artículos científicos, tesis, libros y patentes. Es útil para identificar investigaciones recientes y consultar citaciones académicas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-6.order-lg-1
              h5 Redalyc, Scielo, DOAJ
              p Plataformas de acceso abierto que ofrecen artículos académicos en español y otras lenguas, abarcando diversas áreas del conocimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-6.order-lg-1
              h5 Repositorios universitarios
              p Espacios digitales ofrecidos por universidades públicas y privadas donde se puede acceder libremente a investigaciones, tesis y publicaciones académicas.
    
    .bg-color-9.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Recomendación final</b>: antes de incorporar cualquier fuente, verifica que sea actual, confiable y pertinente con tu tema. Esto fortalecerá la calidad académica de tu proyecto.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Informe de investigación

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/21.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El informe de investigación es el documento que presenta de manera ordenada, clara y argumentada los resultados del proyecto investigativo. En él se integran todos los componentes desarrollados durante el proceso: desde la formulación del problema hasta las conclusiones y referencias. Este informe no solo comunica los hallazgos obtenidos, sino que también da cuenta de la metodología aplicada y del aporte realizado al conocimiento en el área estudiada.

    p.mb-5 Como indican Hernández et al. (2022), “el informe de investigación debe reflejar la lógica interna del estudio, demostrar su coherencia metodológica y ofrecer evidencia clara del cumplimiento de los objetivos” (p. 285). La estructura básica del informe de investigación: 

    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Título")
            p.ms-5 Claro, preciso, representativo del objeto de estudio.
          div(titulo="Resumen")
            p.ms-5 Breve síntesis del problema, objetivos, metodología, principales resultados y conclusiones (usualmente entre 150 y 250 palabras).
          div(titulo="Introducción")
            p.ms-5 Contextualiza el problema, justifica la investigación, presenta la pregunta, los objetivos y el enfoque general.
          div(titulo="Marco teórico")
            p.ms-5 Presenta los conceptos, teorías y antecedentes relevantes que sustentan el estudio.
    
    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/23.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Justificación")
            p.ms-5 Explica la relevancia académica, social, técnica o científica del proyecto.
          div(titulo="Pregunta de investigación")
            p.ms-5 Pregunta guía que orienta el desarrollo del proyecto.
          div(titulo="Objetivos")
            p.ms-5 Propósitos generales y específicos del estudio.
          div(titulo="Metodología")
            p.ms-5 Describe el enfoque, método, técnicas, instrumentos, población, muestra y procedimientos utilizados.
    
    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/24.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Resultados")
            p.ms-5 Presenta los datos obtenidos, organizados en tablas, gráficos o narrativas según el enfoque.
          div(titulo="Discusión")
            p.ms-5 Analiza e interpreta los resultados a la luz del marco teórico. Contrasta con otros estudios.
          div(titulo="Conclusiones")
            p.ms-5 Resume los hallazgos más importantes y plantea aportes, recomendaciones o futuras líneas de investigación.
          div(titulo="Referencias bibliográficas")
            p.ms-5 Listado de las fuentes utilizadas, organizadas según las normas APA (7.ª ed.).
    
    .bg-color-9.mb-5.tarjeta
      .px-4.px-md-5.py-4
        p.mb-0 El informe de investigación no marca el final del proceso, sino el inicio de una nueva etapa: con base en los hallazgos obtenidos, puede surgir una nueva pregunta problematizadora que permita profundizar en el tema abordado o explorar nuevas líneas de investigación. Esta continuidad refuerza el carácter cíclico y dinámico del conocimiento científico.
    
</template>

<script>
export default {
  name: 'Tema3',
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
