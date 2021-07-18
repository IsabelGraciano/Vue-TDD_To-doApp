<template>
  <div id="app" class="container">
    <Todo title="My To-do List"/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',

  components:{Todo}
}
</script>
