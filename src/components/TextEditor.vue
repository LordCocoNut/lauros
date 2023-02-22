<template>
  <div class="wrapper">
    <codemirror
      v-model:value="code"
      :options="cmOptions"
      border
      placeholder="test placeholder"
      class="overflow-hidden"
      @change="change"
    >
    </codemirror>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "codemirror/mode/javascript/javascript.js";

const code = ref("");

const cmOptions = {
  mode: "text/javascript", // Language mode
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 4, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  styleActiveLine: true, // Display the style of the selected row
};
</script>

<style>
.codemirror-container {
  border-radius: 0 !important;
}
</style>