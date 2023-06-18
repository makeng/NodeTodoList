<template>
  <div class="todo-list">
    <Item
      v-for="({title,checked,_id},index) in list"
      :key="_id"
      :title="title"
      :checked="checked"
      @clickCheckbox="toggleItem(index)"
      @clickDelete="deleteItem(_id)"
    />
  </div>
  <van-dialog
    show-cancel-button
    :show="showDialog"
    title="New todo"
    @cancel="showDialog = true"
    @confirm="confirmAdd"
  >
    <input v-model="todoTitle" />
  </van-dialog>
  <van-button
    icon="plus" type="primary"
    @click="showDialog = true"
  >
    New Todo
  </van-button>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import Item from '@/components/TodoList/Item.vue'
import { deleteTodo, fetchTodoList, saveTodo, updateTodo } from '@/utils/api'

const showDialog = ref(false)
const todoTitle = ref('')
const list = reactive([])

function fetchList() {
  fetchTodoList().then(res => {
    console.log(list)
    list.splice(0, list.length, ...res)
  })
}

onMounted(function () {
  fetchList()
})

/**
 * 点击更改
 * @param index
 */
function toggleItem(index) {
  const target = list[index]
  target.checked = !target.checked
  updateTodo(target)
}

/**
 * 点击删除
 * @param id
 */
function deleteItem(id) {
  deleteTodo(id).then(fetchList)
}

function confirmAdd() {
  saveTodo({ title: todoTitle.value }).then(fetchList)
  todoTitle.value = ''
  showDialog.value = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  padding: 10px;
  background: #eee;
  flex: 1;
  overflow: scroll;
}
</style>
