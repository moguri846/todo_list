<template>
  <div class="container">
    <TodoHeader></TodoHeader>
    <section>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </section>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter"

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  background-color: #f6f6f8;
  margin: 0px;
}
.container {
  width: 1290px;
  margin: 0 auto; 
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0 0 0 / 0.03);
}


@media (max-width: 1310px) { 
  .container {
    width: 100%;
    transition: 1.2s;
  }
}

</style>
