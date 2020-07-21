<template>
  <div class=" row">
  <div class="col-sm-6 card edit-area">
    <cc-text-input @displayTextChanged="textBoxValue1= $event"></cc-text-input>
    <cc-text-input @displayTextChanged="textBoxValue2= $event"></cc-text-input>
    <cc-text-input @displayTextChanged="textBoxValue3= $event"></cc-text-input>
    <cc-section-completed></cc-section-completed>
  </div>

  <div class="col-sm-6 card card-display">
    <cc-text-output :display-text=" textBoxValue1" :container-height="140"></cc-text-output>
    <cc-text-output :display-text=" textBoxValue2" :container-height="140"></cc-text-output>
    <cc-text-output :display-text=" textBoxValue3" :container-height="140"></cc-text-output>
  </div>
</div>
</template>
<script>

    import TextInput from "./TextInput";
    import TextOutput from "./TextOutput";
    import SectionCompleted from "./SectionCompleted";
    export default {

        name: "CardInsideLeft",
        data: function () {
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                textBoxValue3: '',
            }

        },
        components: {
            ccTextInput: TextInput,
            ccTextOutput: TextOutput,
            ccSectionCompleted: SectionCompleted
        }
    }
    </script>


<style scoped>


</style>
