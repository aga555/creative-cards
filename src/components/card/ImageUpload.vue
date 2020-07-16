<template>
  <div class=" row">
    <div class="col-sm-12">
      <h4> Upload Image</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload">
      </div>
      <br>
      <img id="image">
      <button type="button" id="setImage">set image</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ImageUpload"
    }
</script>

<style scoped>

</style>
