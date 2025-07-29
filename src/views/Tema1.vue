<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La importancia de investigar en el mundo del trabajo
    
    p.mb-5 La investigación es un pilar esencial en los procesos de creación, ideación e innovación, ya que permite abordar los desafíos contemporáneos desde una perspectiva crítica, creativa y fundamentada. En un entorno laboral cada vez más cambiante y competitivo, la capacidad de investigar no solo mejora la comprensión de los problemas, sino que también impulsa la formulación de soluciones pertinentes, sostenibles y diferenciadoras. Así, investigar en el contexto del trabajo ya no es una tarea exclusiva de científicos o académicos, sino una competencia transversal que todas las personas deben desarrollar para adaptarse, mejorar procesos, tomar decisiones informadas y generar valor dentro de sus organizaciones.
  
    .row.mb-5
      .col-lg-3.order-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-2.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/2.png', alt='')
            .col-lg
              .p-4.text-white
                p.mb-0(data-aos="fade-up") A través de la investigación se fortalecen habilidades como la indagación sistemática, la capacidad de análisis, la interpretación de datos, la formulación de hipótesis, la comunicación argumentativa y el trabajo colaborativo.
        p(data-aos="fade-left") Estas habilidades no solo permiten resolver problemas reales, sino también anticiparse a ellos, identificar tendencias y oportunidades, y fomentar la innovación dentro del entorno productivo. Además, la investigación fomenta una actitud proactiva y de aprendizaje continuo, indispensable en contextos laborales mediados por la transformación digital, la automatización y la transición hacia economías del conocimiento.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto La investigación formativa como herramienta de desarrollo

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En este escenario, el proyecto de investigación formativa se presenta como una estrategia pedagógica de alto valor, ya que permite vincular los saberes académicos con los retos del mundo real. Al desarrollar un proyecto investigativo, los aprendices no solo aplican conocimientos técnicos, sino que también experimentan un proceso estructurado de pensamiento, reflexión y acción. La búsqueda sistemática de información, el planteamiento de problemas, el diseño metodológico y la formulación de conclusiones basadas en evidencias, forman parte de una experiencia educativa que fortalece la autonomía, la creatividad y la responsabilidad del aprendiz frente a su entorno.
    
        .bg-color-3.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 Este tipo de proyectos prepara a los futuros trabajadores no solo para ejecutar tareas, sino para entender el porqué de lo que hacen, proponer mejoras y liderar procesos de cambio. En ese sentido, la investigación formativa articula el aprendizaje significativo con la pertinencia laboral, promoviendo una formación que no solo responde a las necesidades del mercado, sino que también busca transformar los contextos sociales y productivos en los que se insertan los egresados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto La investigación en el SENA
      
    p.mb-5 El SENA, en concordancia con su misión de formar talento humano para el desarrollo integral y productivo del país, ha integrado la investigación aplicada como uno de los componentes clave de su modelo pedagógico. Desde su fundación, la institución ha impulsado el desarrollo de proyectos investigativos con enfoque práctico, alineados con la solución de problemáticas reales del sector productivo, social y tecnológico.

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La investigación en el SENA está orientada a generar conocimiento útil, transferible y contextualizado. Esto se logra mediante el uso de fuentes primarias y secundarias, el análisis de estudios previos y la ejecución de desarrollos experimentales. Así, los aprendices se convierten en actores activos del conocimiento, capaces de generar propuestas innovadoras que mejoren procesos, productos o servicios.
    
    p.mb-5 En particular, la competencia “orientar investigación formativa según referentes técnicos” permite que los aprendices adquieran herramientas metodológicas para estructurar y ejecutar proyectos coherentes con las necesidades de su entorno. Esta competencia no solo refuerza la formación por proyectos, sino que también estimula el pensamiento científico, la toma de decisiones informada y la generación de soluciones con impacto en el contexto local y global.

 
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Desde esta mirada, investigar no es solo un requisito académico, sino una forma de aprender haciendo, de construir conocimiento desde la práctica, y de contribuir de forma significativa al desarrollo del país.
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
