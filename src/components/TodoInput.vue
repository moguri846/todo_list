<template>
  <article class="inputBox shadow">
    <input v-model="todoText" @keyup.enter="addTodoI" type="text" placeholder="Write Todo :)" autofocus>
    <span @click="addTodoI" class="addBtn">
      <i class="fas fa-plus"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <h3 slot="footer">
        할 일을 입력하세요.
        <span @click="showModal = false" class="closeModalBtn"><i class="fas fa-times"></i></span>
      </h3>
    </Modal>
  </article>
</template>

<script>

import { mapActions } from "vuex"
import { v1 } from "uuid"
import Modal from "./common/Modal"

export default {

    data() {
        return {
            todoText: "",
            showModal: false
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        addTodoI() {
            if(this.todoText !== "") {
              this.addTodo({
              id: v1(), 
              completed: false,
              edit: false,
              item: this.todoText
            })
            this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.todoText = "";
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
}
.inputBox input {
    border: none;
    height: 50px;
    line-height: 50px;
    padding: 0px;
    font-size: 20px;
    margin-left: 180px;
}
.addBtn {
    float: right;
    width: 48px;
    height: 50px;
    color: white;
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(to right, #6478fb,#8763fb);
}
.closeModalBtn {
    color: #de4343;
}
@media (max-width: 490px) {
    .inputBox input {
        margin-left: 120px;
    }
}
@media (max-width: 400px) {
    .inputBox input {
        margin-left: 0px;
    }
}
</style>