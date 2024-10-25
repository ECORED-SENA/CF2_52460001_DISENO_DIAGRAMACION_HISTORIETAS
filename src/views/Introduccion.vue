<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.order-last.order-lg-first
        p.mb-0(data-aos="fade-right") El diseño y la maquetación de historietas gráficas requieren un entendimiento profundo del lenguaje audiovisual y sus elementos esenciales, como los planos, ángulos y secuencias. Estos componentes son clave para construir una narrativa visual que logre captar la atención del público y comunicar de manera clara los mensajes de la historia. A través de una secuencia organizada, es posible crear una obra coherente y atractiva. 
      .col-lg-auto.order-first.order-lg-last
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/intro/1.png", alt="", style="width: 190px;").mx-auto.mb-4.mb-lg-0

    .bg-full-width.bg-fondo-1
      .px-4.p-md-5
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/intro/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Además de los aspectos técnicos, la estructura narrativa juega un rol fundamental en la creación de una historieta exitosa. La correcta identificación del inicio, nudo y desenlace, así como el desarrollo de personajes bien definidos, permite construir relatos que conecten emocionalmente con el lector y lo mantengan interesado en el desarrollo de la historia. La selección del público objetivo es igualmente crucial, ya que define el estilo gráfico y el enfoque del contenido. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg.order-last.order-lg-first
            p.mb-0(data-aos="fade-right") En este componente formativo, se analizan también las tendencias del mercado de historietas, tanto a nivel local como global, y cómo la evolución de la industria ha influido en la creación de nuevas oportunidades para los creadores. La relación entre arte e industria, así como la adaptación a nuevas tecnologías, han permitido que el cómic continúe siendo un medio relevante y en constante crecimiento. 
          .col-lg-auto.order-first.order-lg-last
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/intro/3.png", alt="", style="width: 190px;").mx-auto.mb-4.mb-lg-0
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
