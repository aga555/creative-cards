<template>
  <div>
    <h1 class="text-center">Creative Cards</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item"><a @click="pageSelected='cardFront'" class="nav-link"> Front </a></li>
      <li class="nav-item"><a @click="pageSelected='cardInsideLeft'" class="nav-link">Inside left </a></li>
      <li class="nav-item"><a @click="pageSelected='cardInsideRight'" class="nav-link">Inside right </a></li>
      <li class="nav-item"><a @click="pageSelected='cardBack'" class="nav-link">Back </a></li>
    </ul>
    <hr>
    <cc-card-progress></cc-card-progress>
  </div>
</template>

<script>
    import CardProgress from "./card/CardProgress";

    export default {
        name: "Header",
        data: function () {
            return {
                pageSelected: ''
            }

        },
        components: {
            ccCardProgress: CardProgress
        },
        watch: {
            pageSelected: function () {
                this.$emit('pageWsaChanged', this.pageSelected)
            }
        }
    }
</script>

<style scoped>
  h1 {
    margin: 20px;
  }

  a {
    cursor: pointer
  }
</style>
