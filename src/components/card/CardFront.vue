<template>
  <div class="row">
    <div class="col-sm-6 card edit-area"></div>
    <div class="col-sm-6 card card-display"></div>
  </div>
</template>

<script>
    export default {
        name: "CardFront"
    }
</script>

<style scoped>

  .edit-area{
    background-color: #d2f9f9;
    padding: 20px;
    height: 800px;
  }
  .card-display{
    height: 800px;
    padding: 20px;
  }
</style>
