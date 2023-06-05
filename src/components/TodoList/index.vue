<template>
	<div class="todo-list">
		<Item
			v-for="({title,checked},index) in list"
			:title="title"
			:checked="checked"
			@click="toggle(index)"
		/>
	</div>
	<van-button icon="plus" type="primary">Button</van-button>
</template>

<script setup>
import { reactive } from 'vue'
import Item from '@/components/TodoList/Item.vue'

const list = reactive([
  { title: 'first', checked: true },
  { title: 'second', checked: false },
])

/**
 * 点击更改
 * @param index
 */
function toggle(index) {
  const target = list[index]
  target.checked = !target.checked
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  padding: 10px;
  background: #eee;
  flex: 1;
}
</style>
