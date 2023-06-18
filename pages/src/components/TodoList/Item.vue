<template>
  <div class="todo">
    <van-checkbox
      :checked="checked"
      @click="emit('clickCheckbox')"
    >
      {{ title }}
    </van-checkbox>
    <van-button
      icon="delete" color="red" size="mini"
      @click="emit('clickDelete')"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  checked: Boolean,
})

const emit = defineEmits(['clickCheckbox', 'clickDelete'])

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  &:active {
    background: #eee;
    transition: background-color 200ms;
  }
}
</style>
