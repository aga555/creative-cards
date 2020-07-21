<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="form-check-label">
        <input type="checkbox" class="form-check-input" v-model="checked" @click="sectionCompleted">{{checked}}
        Mark section as completed
      </div>
    </div>

  </div>
</template>

<script>
    import {EventBus} from "../../main";

    export default {
        name: "SectionCompleted",
        data: function () {
            return {
                checked:null,
            }
        },
        methods: {
            sectionCompleted: function () {
                EventBus.$emit('mark-as-completed', this.checked)
            }


        }
    }
</script>

<style scoped>
  progress{
    width: 100%;
  }
</style>
