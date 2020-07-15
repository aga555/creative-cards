<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWsaChanged="currentPage = $event"></nav-header>
        <keep-alive>
        <component :is="currentPage"></component>
        </keep-alive>
        <footer>
          <p class="text-center">Creative cards </p>
          <nav>
            <ul style="">

              <li class="nav-item"><a class="nav-link"> Home </a></li>
              <li class="nav-item"><a class="nav-link">About us </a></li>
              <li class="nav-item"><a class="nav-link">Contact </a></li>

            </ul>
          </nav>
        </footer>
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
    import Footer from "./components/Footer";

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
            cardBack:CardBack,
            footer:Footer
        }
    }


</script>

<style>
  body {
    font-family: Verdana, Gneva, sans-serif;
    color: #333;
  }
</style>
