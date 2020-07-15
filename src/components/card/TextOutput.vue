<template>
  <div>
    <p :stle="styleObject">
      {{displayText}}
    </p>
  </div>
</template>

<script>
    export default {
        name: "TextOutput",
        props: {
            displayText: [String],
            containerHeight: {
                type: Number,
                default: 200
            }
        },
        computed: {
            styleObject: function () {
                return {
                    height: this.containerHeight + 'px'
                }
            }
        }
    }
</script>

<style scoped>
  h1 {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-family: 'Shadows Into Light', cursive;
    line-height: 45px;
    font-size: 45px;
    text-shadow: 2px 2px 2px #aaa;
    margin: 5px 0;
    border: 1px dotted grey;
    white-space: pre-line;
    overflow: hidden
  }
</style>
