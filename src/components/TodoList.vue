<template>
	<div class="todo-list">
		<van-radio-group v-model="checked">
			<van-cell-group inset>
				<van-cell title="Radio 1" clickable @click="checked = '1'">
					<template #right-icon>
						<van-radio name="1" />
					</template>
				</van-cell>
				<van-cell title="Radio 2" clickable @click="checked = '2'">
					<template #right-icon>
						<van-radio name="2" />
					</template>
				</van-cell>
			</van-cell-group>
		</van-radio-group>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list{
  padding: 10px;
  background: #eee;
  border-radius: 8px;
  flex:1;
}
</style>
