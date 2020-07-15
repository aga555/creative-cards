<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWsaChanged="currentPage = $event"></nav-header>
        <keep-alive>
        <component :is="currentPage"></component> </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "./components/Header";
    import CardFront from "./components/card/CardFront.vue";
    import CardInsideLeft from "./components/card/CardInsideLeft";
    import CardInsideRight from "./components/card/CardInsideRight";
    import CardBack from "./components/card/CardBack";

    export default {
        data: function () {
            return {
                currentPage: 'cardFront'
            }

        },
        components: {
            navHeader: Header,
            cardFront: CardFront,
            cardInsideLeft: CardInsideLeft,
            cardInsideRight: CardInsideRight,
            cardBack:CardBack
        }
    }


</script>

<style>
  body {
    font-family: Verdana, Gneva, sans-serif;
    color: #333;
  }
</style>
