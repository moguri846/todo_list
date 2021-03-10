<template>
  <div class="todoItem">
      <span @click="completedTodo(todoItem)" class="completedBtn" :class="{checkCompleted: todoItem.completed}">
          <i class="fas fa-check"></i>
      </span>
      <span v-if="!todoItem.edit" :class="{textCompleted: todoItem.completed}">
        {{ todoItem.item }}
      </span>
      <input v-else v-model="todoText" ref="editInput" class="editInput" @keyup.enter="editTodoI(todoItem)" type="text">
      <div class="edit_delete">
        <span @click="editTodoI(todoItem)" class="editBtn">
          <i v-if="!todoItem.edit" class="fas fa-edit"></i>
          <i v-else class="far fa-edit"></i>
        </span>
        <span @click="deleteTodo(todoItem.id)" class="deleteBtn">
          <i class="fas fa-trash-alt"></i>
        </span> 
      </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {

    data() {
        return {
            todoText: ""
        }
    },
    props: {
        todoItem: {}
    },
    methods: {
      ...mapActions(["completedTodo", "editTodo", "deleteTodo"]),
      editTodoI(todoItem) {
          todoItem.edit = !todoItem.edit;
          if(todoItem.edit) {
            this.todoText = todoItem.item;
            this.setFocus();
          } else {
              todoItem.item = this.todoText;
              this.editTodo(todoItem);
          }
      },
      setFocus() {
        setTimeout(() => {
          this.$refs.editInput.focus();
        })
      }
   },
}
</script>

<style scoped>
.todoItem {
    display: flex;
    height: 50px;
    line-height: 50px;
    margin: 8px 0px;
    padding: 0px 14px;
    background-color: white;
    border-radius: 5px;
    font-size: 20px;
}
.editInput {
  width: 75%;
  line-height: 50px;
  border: none;
  outline: none;  
  padding: 0px;
  font-size: 20px;
}
.completedBtn {
    margin-right: 10px;
    color: #62acde
}
.edit_delete {
    margin-left: auto;
    color: #de4343;
}
.editBtn {
    margin-right: 10px;
    color: blue;
}
.checkCompleted {
    color: #b3adad;
}
.textCompleted { 
    text-decoration: line-through;
    color: #b3adad;
}

@media (max-width: 400px) {
    .todoItem {
      font-size: 25px;
    }
}
</style>