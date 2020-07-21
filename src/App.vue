<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWsaChanged="currentPage = $event"></nav-header>
        <keep-alive>
          <component :is="currentPage"></component>
        </keep-alive>
        <cc-footer>
          <p class="text-center">{{appName }} </p>
          <nav>
            <ul class="nav">

              <li class="nav-item"><a class="nav-link"> Home </a></li>
              <li class="nav-item"><a class="nav-link">About us </a></li>
              <li class="nav-item"><a class="nav-link">Contact </a></li>

            </ul>
          </nav>
        </cc-footer>
      </div>
    </div>
  </div>
</template>

<script>
    import FirebaseConfig from './firebaseConfig.js'
    import Header from "./components/Header";
    import CardFront from "./components/card/CardFront.vue";
    import CardInsideLeft from "./components/card/CardInsideLeft";
    import CardInsideRight from "./components/card/CardInsideRight";
    import CardBack from "./components/card/CardBack";
    import Footer from "./components/Footer";

    export default {
        data: function () {
            return {
                appName:'creative cards',
                currentPage: 'cardFront'
            }

        },
        components: {
            navHeader: Header,
            cardFront: CardFront,
            cardInsideLeft: CardInsideLeft,
            cardInsideRight: CardInsideRight,
            cardBack: CardBack,
            ccFooter: Footer
        }
    }


</script>

<style>
  body {
    font-family: Verdana, Gneva, sans-serif;
    color: #333;
  }
  .fade-enter ,.fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active ,.fade-leave-active {
    transition: .5s;
  }

</style>
