<template>
  <div>
    <h1 class="text-center">Creative Cards</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item"><a class="nav-link"> Front </a></li>
      <li class="nav-item"><a class="nav-link">Inside left </a></li>
      <li class="nav-item"><a class="nav-link">Inside right </a></li>
      <li class="nav-item"><a class="nav-link">Back </a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Header"
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
