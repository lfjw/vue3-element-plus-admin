<template>
  <div>
    11
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug"></svg-icon>
    212
    <!-- icon-class svg图标名称 class-name 额外的自定义类名 @click绑定事件 -->
    <svg-icon icon-class="404" class-name="custom-class" @click="sayHi"></svg-icon>

  </div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { proxy } = getCurrentInstance()!
    const sayHi = () => {
     proxy?.$message.success('成功')
    }

    return {
      sayHi
    }
  }
})
</script>

<style lang="scss">
  .custom-class { // 自定义样式404
    font-size: 200px;
    color: green;
  }
</style>
