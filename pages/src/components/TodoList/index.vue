<template>
  <div class="todo-list">
    <Item
        v-for="({title,checked},index) in list"
        :title="title"
        :checked="checked"
        @click="toggle(index)"
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
import { fetchAllTodoList, saveTodo } from '@/utils/api'

const showDialog = ref(false)
const todoTitle = ref('')
const list = reactive([])

function initList() {
  fetchAllTodoList().then(res => {
    list.splice(0, list.length, ...res)
  })
}

onMounted(function () {
  initList()
})

/**
 * 点击更改
 * @param index
 */
function toggle(index) {
  const target = list[index]
  target.checked = !target.checked
}

function confirmAdd() {
  saveTodo({ title: todoTitle.value }).then(initList)
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
}
</style>
