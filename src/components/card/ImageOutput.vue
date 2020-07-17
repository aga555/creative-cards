<template>
<div style="border: 1px">
  <img id="outputImage">{{displayImage}}
</div>
</template>

<script>
    export default {
        name: "ImageOutput",
        props:{
            displayImage:{
                type:String
            },
            containerHeight:{
                type: Number,
                default:200
            }
        }
    }
</script>

<style scoped>

</style>
