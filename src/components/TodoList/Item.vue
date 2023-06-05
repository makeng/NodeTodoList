<template>
	<div class="todo"
	>
		<van-checkbox
			:checked="checked"
		>
			{{ title }}
		</van-checkbox>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  checked: Boolean,
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  &:active {
    background: #eee;
    transition: background-color 200ms;
  }
}
</style>
