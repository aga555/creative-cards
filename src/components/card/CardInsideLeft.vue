
<template>
  <div class="row">
    <p> Card inside Left</p>
    <div class="col-sm-6 card edit-area"></div>
    <div class="col-sm-6 card card-display"></div>
  </div>
</template>
<script>
    export default {
        name: "CardInsideLeft"
    }
</script>

<style scoped>

</style>



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
