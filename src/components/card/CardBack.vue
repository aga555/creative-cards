<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">

      <cc-image-upload @displayImageChanged="imageName=$event" ></cc-image-upload><hr>

    </div>

    <div class="col-sm-6 card card-display">

      <cc-image-output :display-image="imageName" :container-height="400" :clearImageProp="clearImage"></cc-image-output>




    </div>

  </div>
</template>

<script>

    import ImageUpload from "./ImageUpload";
    import ImageOutput from "./ImageOutput";


    export default {
        name: "CardBack",
        data: function () {
            return {

                imageName :''
            }
        },
        methods:{
            clearImage:function () {
                if ( this.imageName !==''){
                    this.imageName='water-3322250_640.jpg'
                } }
        },
        components: {

            ccImageUpload: ImageUpload,
            ccImageOutput: ImageOutput
        }
    }
</script>
