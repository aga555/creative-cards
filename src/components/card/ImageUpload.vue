<template>
  <div class=" row">
    <div class="col-sm-12">
      <h4> Upload Image</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
      </div>
      <br>
      <img id="image">
      <button type="button" id="setImage">set image</button>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
    export default {
        name: "ImageUpload",
        data:function () {
            return{
                file:''
            }

        },
        methods:{
            uploadFile: function (event) {
              this.file = event.target.files[0]
                 var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
                storageRef.put(this.file)
            }
        }
    }
</script>

<style scoped>

</style>
