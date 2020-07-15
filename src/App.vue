<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWsaChanged="currentPage = $event" ></nav-header>
<component :is="currentPage"></component>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "./components/Header";
    import CardFront from "./components/card/CardFront.vue";

    export default {
        data: function () {
            return{
                currentPage:'cardFront'
            }

        },
        components: {
            navHeader: Header,
            cardFront: CardFront
        }
    }


</script>

<style>
body{
  font-family: Verdana, Gneva,sans-serif;
  color: #333;
}
</style>
