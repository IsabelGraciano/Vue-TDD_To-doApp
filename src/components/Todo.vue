<template>
    <div class="container">
        <div class ="card">
            <h2 class="title">{{ title }}</h2>

            <input type="text" data-testid="todo-input" v-model="newTodo" placeholder="Add a task" class="input"/>
            <button data-testid="todo-submit" @click.prevent="addTodo" class="button" >Add</button>

            <ul data-testid="todos" class="text-left">
                <li v-for="(todo, todoKey) of todos" :data-testid="`todo-${todoKey}`" :key="todoKey" :data-done="todo.done" :class="todo.done ? 'done' : ''" class="checkbox">
                    <span :data-testid="`todo-${todoKey}-toggle`" @click.prevent="toggle(todo)" class="span"> 
                        <input type="checkbox"/>
                    <!-- {{ todo.done ? "Done - " : "Mark done - " }} -->
                    </span>

                {{ todo.description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Todo',

  props:{
      title:{
          type:String,
          required:true
      }
  },

  data(){
      return {
          todos: [],
          newTodo: ''
      }
  },

  methods:{
      addTodo(){
          this.todos.push({
              description: this.newTodo,
              done: false
          })
          this.newTodo=''
      },
      toggle(todo){
          todo.done= !todo.done
      },
  }
}
</script>

<style lang="css">

.container{
    display: grid;
    justify-content: center;
    height: 38rem;
}

.card{
    background-color: rgb(169, 169, 246);
    text-align: center;
    width: 28rem;
    border-radius: 10%;
}

.title{
    margin: 50px auto;
}

.input{
    margin-right: 10px;
}

.button{
    width: 100px;
    border-radius: 25%;
    color: white;
    background-color: violet;
    border-color: violet;
}

li.done {
  text-decoration: line-through;
}

ul{
   list-style: none;
}

.text-left{
    text-align: left;
}

li{
    margin: 10px auto 10px 38px;
}

.span{
    text-align: right;
}

</style>