<template>
  <div class="img-container " :style="styleObject" @mouseover="showOptions=true"
       @mouseleave="showOptions=false">
    <transition name="scale">
      <button type="button"
              class="btn btn-outline-danger btn-sm"
              v-show="showOptions"
              @click="clearImageProp"> Remove Image
      </button>
    </transition>
    <img id="outputImage">
    {{displayImage}}
  </div>
</template>

<script>

    import * as Firebase from "firebase";

    export default {
        name: "ImageOutput",
        props: {
            displayImage: {
                type: String
            },
            containerHeight: {
                type: Number,
                default: 200
            },
            clearImageProp: Function
        },
        data: function () {
            return {
                showOptions: false
            }

        },
        watch: {
            displayImage: function () {
                var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage);
                storageRef.getDownloadURL().then(function (url) {
                    var img = document.getElementById('outputImage');
                    img.src = url
                    setDragable();

                })
            }
        }
        ,
        computed: {
            styleObject: function () {
                return {
                    height: this.containerHeight + 'px'
                }
            }
        }
    }

    function setDragable() {
        $('#outputImage').draggable();

    }
</script>

<style scoped>
  .img-container {
    border: 1px dotted grey;
    overflow: hidden;
    margin: 5px;
  }

  button {
    position: absolute;
    z-index: 1;
  }

  img {
    width: 100%;
  }

  .scale-enter-active {
    animation: scale-in 0.5s;
  }

  .scale-enter-leave {
    animation: scale-out 0.5s;
  }

  @keyframes scale-in {
    0% { transform: scale(0);}
    100% {transform: scale(1);}

  }

  @keyframes scale-out {
    0% {transform: scale(1);
    }
    100% {transform: scale(0);
    }
  }
</style>
