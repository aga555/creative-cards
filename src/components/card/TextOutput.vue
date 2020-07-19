<template>
  <div @mouseover="showOptions= true"
       @mouseleave="showOptions= false">
    <form class="small" v-show="showOptions">

      <label for="selectBox"> Font size </label>
      <select class="custom-select" id="selectBox" v-model="setFontsize">
        <option value="12">12 px</option>
        <option value="54">54 px</option>
        <option value="60">60 px</option>
        <option value="72">72 px</option>
      </select>

      <div class="form-check form-check-inline">
        <label class="form-check-lablel">
          <input type="radio" class="form-check-input" value="left" v-model="setTextAlign">left
          <input type="radio" class="form-check-input" value="center" v-model="setTextAlign">center
          <input type="radio" class="form-check-input" value="right" v-model="setTextAlign">right
        </label>
      </div>

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" value="bold" v-model="setBold"> Bold
        </label>
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" value="italic" v-model="setItalic"> Italic
        </label>

      </div>

    </form>
    <p :style="styleObject"
       :class="{bold:setBold,italic:setItalic}"
    >
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
                setFontsize: '',
                setTextAlign: '',
                setBold: false,
                setItalic: false,
            }
        },

        computed: {
            styleObject: function () {
                return {

                    textAlign: this.setTextAlign,
                    fontSize: this.setFontsize + 'px',
                    height: this.containerHeight + 'px',
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
    font-family: 'Montserrat', sans-serif;
    line-height: 45px;
    font-size: 45px;
    text-shadow: 2px 2px 2px #aaa;
    margin: 5px 0;
    border: 1px dotted grey;
    white-space: pre-line;
    overflow: hidden
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .form {
    position: absolute;
    border: 1px dotted grey;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  .select {
    height: 40%;
  }

</style>
