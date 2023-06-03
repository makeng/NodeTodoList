<template>
	<h3>
		<img class="icon" alt="Vue logo" src="./assets/logo.png">
		Todo List
	</h3>
	<TodoList />
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
  },
}
</script>

<style>
#app {
  padding: 20px 10px;
  height: 100vh;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h3 {
  margin-bottom: 10px;
}
.icon {
  display: inline-block;
  width: 30px;
  vertical-align: middle;
}
</style>
