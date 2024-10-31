<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Maquetación y narrativa en historietas gráficas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Reconocer el diseño y maquetación de historietas gráficas, como el lenguaje audiovisual, la estructura narrativa y el análisis del mercado.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el lenguaje audiovisual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sistema de signos sonoros y visuales utilizados para transmitir un mensaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sistema de imágenes secuenciales sin ningún propósito narrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnica que usa solo sonidos para narrar una historia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conjunto de planos y ángulos sin coherencia visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué es una toma en el contexto de las historietas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un espacio donde el ilustrador puede mostrar efectos especiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El espacio que tiene el ilustrador para desarrollar movimientos y acciones de los personajes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una escena completa con todos los personajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una secuencia de varias viñetas unidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito de seleccionar planos, ángulos y movimientos en una historieta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear una escena visualmente compleja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impresionar al lector con efectos visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar efectos ópticos en las viñetas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ilustrar de manera clara el desarrollo de la historia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es una secuencia narrativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una serie de planos sin relación entre sí.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un conjunto de tomas que no siguen ningún orden.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El orden en el que se escribe una historia para su desarrollo, con causa y efecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una ilustración compuesta de personajes en movimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función del nudo en una estructura narrativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar el desenlace de la historia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer el conflicto o problema que debe ser resuelto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Introducir los personajes principales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir la conclusión de la historia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es un personaje principal en una historieta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un personaje secundario que ayuda al protagonista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un personaje incidental que aparece en una escena.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un personaje que no tiene impacto en la trama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El personaje que lleva el hilo dramático de la historia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite el análisis del mercado en las historietas gráficas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar más ingresos para los creadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entender la relación entre arte e industria y adaptarse a nuevos medios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identificar los competidores principales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer una única forma de comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El plano general se utiliza para resaltar los detalles faciales de los personajes.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El público objetivo de una historieta define el estilo gráfico y el género de la historia.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En Colombia, las historietas no están incluidas en los beneficios de la Ley del Libro.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
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
