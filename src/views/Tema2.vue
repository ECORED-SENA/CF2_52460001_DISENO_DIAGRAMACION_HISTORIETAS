<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis del mercado

    p.mb-4(data-aos="fade-right") En el ámbito de las industrias creativas, el mercado editorial ha experimentado un crecimiento constante a nivel global y, de manera más gradual, en Colombia. En este contexto, muchas industrias dedicadas al desarrollo de cómics han evolucionado hacia productoras audiovisuales, trasladando sus contenidos desde los formatos impresos hasta las pantallas de cine y televisión. Sin embargo, en la actualidad, la creación de historietas suele originarse a partir de iniciativas individuales y colectivas de creativos que divulgan su trabajo en redes colaborativas. 

    .row.justify-content-center.align-items-stretch.g-0.mb-5
      .col-lg-8.bg-color-5
        .px-5.py-4
          p.mb-0(data-aos="fade-right") A pesar de que la industria del cómic en Colombia aún es incipiente, se están creando espacios de socialización e intercambio con nuevos aliados y plataformas, como los festivales que se celebran en diversas ciudades, congregando a aficionados y profesionales del mundo de la historieta.
      .col-lg-4.bg-color-2.d-flex.flex-column.justify-content-end
        figure.m-0.text-end(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/17.png", alt="", style="max-width: 100%").img-fluid

    .titulo-tres.mb-4(data-aos="flip-up").mb-4.mb-lg-5
      h4 La relación entre arte e industria

    p.mb-4(data-aos="fade-right") La relación entre el arte y la industria es muy estrecha, ya que los contenidos editoriales deben adaptarse a los nuevos medios y formatos. Si bien los personajes icónicos continúan dominando el cine y la televisión, cada vez surgen más historias y creadores emergentes. Al mismo tiempo, las editoriales independientes han sabido adaptarse a las tecnologías de la información, reduciendo los costos de producción y ampliando su impacto a nivel global. 

    .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, las novelas gráficas y las historietas se benefician de los incentivos fiscales que se aplican al resto de la producción literaria nacional, a raíz de una demanda contra la Ley 23 de 1993, conocida como la Ley del libro. Esta inclusión ha permitido reducir los costos de producción de una novela gráfica en el país hasta en un 30 %.

    .bg-color-8
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-auto
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/19.png", alt="", style="max-width: 100%").img-fluid
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-right").mt-lg-4 A nivel mundial, las ventas de historietas han aumentado en los últimos años, impulsadas por la aparición de nuevas plataformas tecnológicas y modelos de negocio innovadores, como las suscripciones en línea o la venta de contenido digital. 

    .titulo-tres.mb-4(data-aos="flip-up").mb-4.mb-lg-5
      h4 Público objetivo 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-right") En Colombia, un pequeño porcentaje de la población lee entre 1,9 y 2,2 libros al año, según estudios del Ministerio de Educación Nacional. Dentro de este grupo, solo el 0,5 % de los adolescentes lee cómics. Aunque las cifras de lectores son más altas en otros países, el mercado de la historieta en Colombia sigue evolucionando y adaptándose a los cambios sociales. 
        .bg-color-5
          .row.justify-content-center.align-items-stretch.g-0
            .col-lg-auto.h-100
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/20.png", alt="", style="max-width: 100%").img-fluid
            .col-lg.h-100
              .p-4
                p.mb-0(data-aos="fade-right") Estos cambios han permitido que el público objetivo de las historietas sea cada vez más diverso, abarcando personas de diferentes edades, estilos e intereses, dependiendo del género de la obra.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/21.png", alt="", style="max-width: 100%").img-fluid.mt-4.mt-lg-0

    p.mb-4(data-aos="fade-right") Para incursionar en esta industria, es recomendable que al crear una historieta se defina claramente el público al que va dirigida. Esto ayudará a determinar el estilo gráfico, el género, el formato (físico o digital), así como otras condiciones clave para su comercialización o distribución. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/22.png", alt="", style="max-width: 100%").img-fluid
          
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
