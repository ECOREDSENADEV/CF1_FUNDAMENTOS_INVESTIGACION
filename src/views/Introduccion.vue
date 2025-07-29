<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 El mundo laboral actual demanda profesionales capaces de enfrentar desafíos complejos con pensamiento crítico, iniciativa y creatividad. Ya no es suficiente con dominar herramientas tecnológicas o hablar una segunda lengua; ahora se requiere la capacidad de analizar información, identificar problemas reales y proponer soluciones con impacto en los contextos sociales y productivos.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo tiene como propósito fortalecer en el aprendiz habilidades investigativas que le permitan estructurar proyectos orientados a resolver necesidades concretas. A partir de métodos sistemáticos, se busca desarrollar capacidades argumentativas, interpretativas y propositivas, esenciales para generar conocimiento aplicable en su entorno.
    
    .bg-color-1.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Investigar se convierte así en una estrategia para aprender a aprender, construir valor y tomar decisiones informadas. En un entorno que exige innovación y adaptación constante, formar competencias para la indagación y la gestión del conocimiento es clave para responder a los retos de las profesiones del presente y del futuro.

</template>

<script>
export default {
  name: 'Introduccion',
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
