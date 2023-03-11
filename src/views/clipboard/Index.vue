<template>
  <el-input data-testid="input" v-model="data" />
  <el-button data-testid="button" type="primary" @click="onClick(data, $event)" > copy </el-button>
  <p>用户复制的内容：
    <span data-testid="copy">{{ txt }}</span>
  </p>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import Clipboard from 'clipboard'
import { reactive, defineComponent, toRefs, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      data: 'www.baidu.com',
      txt: ''
    })

    onMounted(() => {
      document.addEventListener('copy', () => {
        state.txt = window.getSelection()?.toString() || ''
      })
    })

    const onClick = (text: string, event: Event) => {

      const options = {
        text: () => text
      }
      const clipboard = new Clipboard(event.target as Element, options)
      clipboard.on('success', () => {
        ElMessage({
          message: '复制成功！',
          type: 'success',
          duration: 1500
        })
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        ElMessage({
          message: '复制失败！',
          type: 'error'
        })
        clipboard.destroy()
      });
      (clipboard as any).onClick(event)
    }
    return {
      ...toRefs(state),
      onClick
    }
  }
})
</script>