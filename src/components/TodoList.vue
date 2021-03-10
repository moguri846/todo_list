<template>
  <article>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in allTodos" :key="index" class="shadow">
        <TodoItem :todoItem="todoItem"></TodoItem>
      </li>
  </transition-group>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoItem from "./TodoItem.vue"

export default {

    computed: {
        ...mapGetters(["allTodos"]),
    },
   components: {
     TodoItem
   }
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0px;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>