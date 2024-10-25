<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lenguaje audiovisual en los cómics



    .row.justify-content-center.align-items-stretch.g-0.mb-5
      .col-lg-8.bg-color-1
        .px-5.py-4
          p.mb-0(data-aos="fade-right") El lenguaje audiovisual en los cómics es una herramienta fundamental para transmitir ideas, emociones y narrativas a través de signos visuales, dado que este medio no suele contar con los recursos sonoros o dinámicos del cine o la televisión. Se construye mediante la interacción de imágenes y texto, donde cada elemento visual tiene un propósito narrativo. La secuencialidad de viñetas, junto con una adecuada elección de planos y ángulos, es lo que permite a los lectores comprender el flujo de la historia. 
      .col-lg-4.bg-color-2.d-flex.flex-column.justify-content-end
        figure.m-0.text-end(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/5.png", alt="", style="max-width: 100%").img-fluid

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.order-last.order-lg-first
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema1/6.png", alt="", style="max-width: 295px;").mx-auto.mb-4.mb-lg-0
          .col-lg
            p.mb-0(data-aos="fade-right") El lenguaje audiovisual en los cómics es mucho más que una simple ilustración; es una herramienta narrativa que combina múltiples elementos visuales para crear una experiencia inmersiva y emocional en el lector. Desde la selección de planos y ángulos hasta el uso de efectos gráficos y colores, cada decisión artística está orientada a construir una narrativa coherente y atractiva que guíe al lector a través de la historia. 

        .titulo-tres.mb-4(data-aos="flip-up").mb-5
          h4 Lenguaje audiovisual 

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .bg-color-3.p-4.mb-4
              p.mb-0(data-aos="fade-right") El lenguaje audiovisual es un sistema de signos visuales y sonoros que se utiliza para transmitir un mensaje al usuario. En el diseño y la diagramación de historietas impresas, es necesario trabajar únicamente con los elementos visuales: texto (tipografía) e imágenes (esquemas, dibujos, fotografías), los cuales se organizan de manera secuencial y coherente, basándose en la elección de planos y ángulos. El movimiento, por su parte, se representa gráficamente mediante poses, líneas y efectos visuales, entre otros recursos.  

            .row.justify-content-center.align-items-center.mb-5
              .col-lg-auto
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/7.png", alt="", style="max-width: 295px").img-fluid
              .col-lg
                p.mb-0(data-aos="fade-right").mb-4 #[strong En las historietas], una toma es el espacio donde el ilustrador despliega los movimientos y acciones de los personajes. La correcta selección de plano, ángulo y movimiento permite representar de forma clara el desarrollo de la historia. Por ello, es fundamental elegir estos elementos en función de la intención comunicativa y los aspectos narrativos de la historieta.  

                .bg-color-4.p-4
                  p.mb-0(data-aos="fade-right") En el cómic, los planos permiten enfocar diferentes aspectos de la historia. Desde el gran plano general, que abarca escenarios completos, hasta el primer plano, que destaca las emociones del personaje, cada uno aporta una perspectiva única y guía la narrativa visual.  
          .col-lg-4 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema1/8.png", alt="", style="max-width: 400px").img-fluid


    .bg-full-width.bg-fondo-3
      .px-4.px-md-5

        .row.justify-content-center.align-items-start.mb-5
          .col-lg-6

            .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
              h5 Figura 1.
              span Planos 

            figure(data-aos="zoom-in")
              img(src="@/assets/curso/figuras/figura1.png", alt="", style="max-width: 610px").img-fluid

          .col-lg-6
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
              div(titulo="Gran plano general")
                p.mb-0(data-aos="fade-right") Usado para representar grandes escenarios y figuras humanas de cuerpo entero. 
              div(titulo="Plano general")
                p.mb-0(data-aos="fade-right") Muestra la escena completa, presentando a los personajes u objetos en su entorno. 
              div(titulo="Plano entero")
                p.mb-0(data-aos="fade-right") Presenta a un personaje u objeto completo, destacándolo mientras el fondo pasa a segundo plano. 
              div(titulo="Plano americano")
                p.mb-0(data-aos="fade-right") Expone a la figura humana desde la cabeza hasta las rodillas, resaltándola sin mucho detalle. 
              div(titulo="Plano medio")
                p.mb-0(data-aos="fade-right") Muestra la escena completa, presentando a los personajes u objetos en su entorno. 
              div(titulo="Primer plano")
                p.mb-0(data-aos="fade-right") Presenta a un personaje u objeto completo, destacándolo mientras el fondo pasa a segundo plano. 

    Separador

    .titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
      h2 1.1 Escena 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La escena es el conjunto de planos y ángulos organizados de manera intencionada para desarrollar una parte específica de la narrativa. Cada escena tiene como objetivo avanzar en la historia, integrando la interacción entre los personajes y el entorno visual, lo que permite al espectador comprender la acción y el contexto. 

    Separador

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
          h2 1.2 Secuencia

        p.mb-4(data-aos="fade-right") Una secuencia es una serie de escenas o imágenes conectadas que forman una acción continua dentro de la narrativa. Esta sucesión de escenas permite desarrollar momentos clave de la trama, vinculando acciones y eventos que impulsan la historia hacia adelante, generando un flujo narrativo coherente. 


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema1/10.png", alt="", style="max-width: 100%").img-fluid

    Separador

    .titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
      h2 1.3 Estructura narrativa

    p.mb-4(data-aos="fade-right") Las historias poseen una trama que se fundamenta en tres momentos establecidos: 

    .bg-full-width.bg-fondo-slide
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-down")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Inicio
                  p.mt-4 Introducción en la que se presentan los personajes y se contextualiza al lector sobre el lugar y tiempo de los hechos. Puede desarrollarse de manera cronológica (todos los hechos se conocen desde el principio) o de forma no lineal (sin seguir una secuencia temporal convencional).
              .col-lg-4
                img(src='@/assets/curso/tema1/11.png', style="max-width: 416px").mx-auto
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Nudo
                  p.mt-4 Aquí se establece el conflicto o problema que los protagonistas deben resolver. Es el punto en el que la historia comienza a desarrollarse a partir de la situación planteada.
              .col-lg-4
                img(src='@/assets/curso/tema1/12.png', style="max-width: 416px").mx-auto
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Nudo
                  p.mt-4 Momento en el que se resuelve el conflicto y la narración llega a su fin. El final puede ser cerrado, donde la acción concluye, o abierto, permitiendo la continuación de la historia o su conexión con otras tramas.
              .col-lg-4
                img(src='@/assets/curso/tema1/13.png', style="max-width: 416px").mx-auto

    Separador


    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5
        .titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
          h2 1.4 Personajes

        p.mb-4(data-aos="fade-right") Los personajes son los seres, personas o entidades que participan en una historia, ya sea en roles principales, secundarios o incidentales. A través de sus acciones, diálogos y relaciones, dan vida a la trama y permiten el desarrollo de los acontecimientos dentro de la narrativa. 


        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").brounded
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/14.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3.text-center Principal
                p.mb-0 Es el personaje que guía el hilo dramático de la historia. Puede ser el protagonista, quien actúa para alcanzar ciertos objetivos, o el antagonista (o villano), que se opone y obstaculiza las acciones del protagonista.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").brounded
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/15.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3.text-center Secundario
                p.mb-0 Aunque no juega un papel central en el desarrollo de los acontecimientos, apoya la trama y contribuye a su avance.        

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").brounded
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/16.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3.text-center Incidentar
                p.mb-0 Son personajes que aparecen en la historia con un propósito específico y, generalmente, tienen una participación limitada.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
