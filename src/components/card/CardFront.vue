<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-text-input @displayTextChanged="textBoxValue1= $event"></cc-text-input>
      <cc-text-input @displayTextChanged="textBoxValue2= $event"></cc-text-input>
      <cc-text-input @displayTextChanged="textBoxValue3=$event"></cc-text-input>
    </div>
    1 :{{textBoxValue1}}
    2 :{{textBoxValue2}}
    3: {{textBoxValue3}}
    <div class="col-sm-6 card card-display"></div>
  </div>
</template>

<script>
    import TextInput from "./TextInput";

    export default {
        name: "CardFront",
        data: function () {
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                textBoxValue3: '',
            }
        },
        components: {
            ccTextInput: TextInput
        }
    }
</script>

<style scoped>

  .edit-area {
    background-color: #d2f9f9;
    padding: 20px;
    height: 800px;
  }

  .card-display {
    height: 800px;
    padding: 20px;
  }
</style>
