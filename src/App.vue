<template>
	<h3>
		<img class="logo" alt="Vue logo" src="./assets/logo.png">
		Node Todo List
	</h3>
	<TodoList />
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList,
  },
}
</script>

<style>
#app {
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
  margin: 20px 0;
  padding: 0 20px;
}
.logo {
  display: inline-block;
  margin-right: 10px;
  width: 30px;
  vertical-align: middle;
}
</style>
