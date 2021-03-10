<template>
  <footer>
      <span @click="clearAllTodo" class="clearAllBtn"></span>
  </footer>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  methods: {
    ...mapActions(["clearAllTodo"])
  }
}
</script>

<style>
.clearAllBtn {
    display: inline-block;
    width: 136px;
    height: 50px;
    line-height: 50px;
    color: #e20303;
    background-color: white;
}
.clearAllBtn::after {
  content: "Clear All";
}
</style>