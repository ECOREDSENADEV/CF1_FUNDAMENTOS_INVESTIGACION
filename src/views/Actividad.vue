<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de la investigación aplicada',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave del proceso investigativo, incluyendo sus etapas, enfoques, niveles, técnicas, métodos y elementos estructurales dentro del contexto formativo y productivo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales fines de la investigación en contextos laborales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implementar normas de seguridad industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proponer soluciones a problemas reales del entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar el uso de herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reforzar únicamente conocimientos teóricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué enfoque se caracteriza por medir variables y aplicar análisis estadísticos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mixto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuantitativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Etnográfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cualitativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué elemento da origen a un proyecto de investigación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una pregunta problematizadora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un resultado estadístico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una hipótesis previa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una conclusión anticipada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la principal característica del enfoque cualitativo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer hipótesis comprobables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprender significados y experiencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Generalizar resultados mediante encuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obtener patrones replicables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué representa el objeto de estudio en un objetivo investigativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El fenómeno o situación que se desea analizar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El resultado final esperado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El método utilizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El contexto geográfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué nivel de investigación busca detallar características de un fenómeno?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exploratorio..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Descriptivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Argumentativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Explicativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de fuente ofrece datos originales y sin interpretación previa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secundaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Primaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Analítica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Editorial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué método permite establecer relaciones de causa y efecto mediante control de variables?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Experimental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Hermenéutico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Histórico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Etnográfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función del marco teórico en un proyecto de investigación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustentar el estudio con conceptos, teorías y antecedentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Describir las conclusiones obtenidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formular los resultados estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar los hallazgos sin análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué técnica se emplea comúnmente en estudios cualitativos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuestionarios cerrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Listas de cotejo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entrevistas semiestructuradas.',
              esCorrecta: true,
            },
            {
              id: 'a',
              texto: 'Pruebas objetivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La investigación en el SENA se orienta a resolver problemas reales mediante la teoría pura.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una hipótesis es una suposición fundamentada que puede ser verificada empíricamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El universo finito es aquel compuesto por elementos fácilmente cuantificables.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En el enfoque mixto se combinan técnicas cualitativas y cuantitativas para una visión integral.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las conclusiones deben redactarse sin considerar los objetivos del proyecto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
