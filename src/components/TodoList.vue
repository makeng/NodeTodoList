<template>
	<div class="todo-list">
		<div class="todo"
		     v-for="({title,checked},index) in state.list"
		     @click="clickTodo(index)"
		>
			<van-checkbox
				:key="title "
				:checked="checked"
			>
				{{ title }}
			</van-checkbox>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  list: [
    { title: 'first', checked: true },
    { title: 'second', checked: false },
  ],
})
/**
 * 点击更改
 * @param index
 */
function clickTodo(index) {
  const target = state.list[index]
  state.list[index] = Object.assign(target, { checked: !target.checked })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  padding: 10px;
  background: #eee;
  flex: 1;
}
.todo {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 4px;
  &:active {
    background: #eee;
    transition: background-color 200ms;
  }
}
</style>
