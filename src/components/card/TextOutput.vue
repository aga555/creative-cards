<template>
  <div @mouseover="showOptions= true"
       @mouseleave=false>
    <form class="small" v-show="showOptions">

      <label for="selectBox"> Font size </label>
      <select class="custom-select" id="selectBox" v-model="setFontsize">

        <option value="12">12 px</option>
        <option value="54">54 px</option>
        <option value="60">60 px</option>
        <option value="72">72 px</option>
      </select>
    </form>
    <p :style="styleObject">
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
        data: function () {
            return {

                showOptions: false,
                setFontsize: ''
            }
        },

        computed: {
            styleObject: function () {
                return {
                    fontSize: this.setFontsize + 'px',
                    height: this.containerHeight + 'px'
                }
            }
        }
    }
</script>

<style scoped>ZDSDD
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
